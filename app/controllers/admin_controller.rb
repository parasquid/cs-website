class AdminController < ApplicationController

  before_filter :authenticate

  def stats
    client = Savon.client('http://cs-production.s3.amazonaws.com/cloudspokes-stats-wsdl.xml')
    response = client.request(:stat, :platform_stats) do
      soap.namespaces["xmlns:stat"] = "http://soap.sforce.com/schemas/class/StatsWS"
      soap.header = { 'stat:SessionHeader' => { 'stat:sessionId' => current_access_token }}
    end 
    page = response.to_array(:platform_stats_response, :result).first
    render :json => page
  end  
  
  def blogfodder
    @challenge = Challenges.find_by_id(current_access_token, params[:id])[0]
    @winners = Challenges.winners(current_access_token, params[:id])
    @all_submissions = Challenges.all_submissions(current_access_token, params[:id])
  end
  
  def refresh_token
    logger.info "[AdminController]==== refreshing the settting table with a new access token for #{ENV['SFDC_USERNAME']}"
    config = YAML.load_file(File.join(::Rails.root, 'config', 'databasedotcom.yml'))
    client = Databasedotcom::Client.new(config)
    access_token = client.authenticate :username => ENV['SFDC_USERNAME'], :password => ENV['SFDC_PASSWORD']  
    # delete the current record
    p Settings.delete(Settings.first)
    # save the new token
    s = Settings.new
    s.access_token = access_token
    s.save
    render :inline => "Token refreshed and written to pg - #{access_token}"
  end
  
  def delete_all_users
    User.delete_all
    render :inline => "All users deleted from PG and logged off from the site"
  end
  
  def display_settings
    @results = Settings.all
  end  
  
  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV['WEB_ADMIN_USERNAME'] && password == ENV['WEB_ADMIN_PASSWORD']
    end
  end

end
