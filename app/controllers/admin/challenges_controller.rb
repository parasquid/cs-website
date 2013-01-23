require 'cs_api_account'
require 'cs_api_member'
require 'will_paginate/array'

class Admin::ChallengesController < ApplicationController
	layout 'admin'

  def new
    @challenge = Admin::Challenge.new

    # defaulted to the current time so that the user can make changes if desired
    @challenge.start_date = Time.now.ctime

    @prizes = @challenge.prizes || []
    @categories = ['Salesforce.com', 'Google', 'Ruby', 'Heroku', 'Cloud Foundry', 'Mobile', 'Java', 'Javascript']
  end

  def edit
    challenge = ::Challenge.find(access_token, [params[:id], 'admin'].join('/'))
    @challenge = Admin::Challenge.new(challenge.raw_data)
    @challenge_categories = @challenge.categories.records.map(&:display_name).join(',')
    @categories = ['Salesforce.com', 'Google', 'Ruby', 'Heroku', 'Cloud Foundry', 'Mobile', 'Java', 'Javascript']
    @prizes = @challenge.prizes || []
  end

end