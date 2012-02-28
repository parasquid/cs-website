function Quiz(data, components, url){

    var self = data;
    var editor = components.editor;
    var EDITOR_MIN_LINES = 20;
    var syntax = {'javascript': 'javascript', 'ruby':'ruby','java':'text/x-java', 'mixed':'text/html'};

    self.curr = ko.observable(0);
    self.language = ko.observable('');

    console.log(data);

    self.startTimer = function(){
        $(".stopwatch .start").click();
    };

    self.stopTimer = function(){
        $(".stopwatch .stop").click();
    };

    self.resetTimer = function(){
        $(".stopwatch .reset").click();
    };

    self.getTimerValue = function(){
        var time = [$(".stopwatch .display .hr").text(),
                    $(".stopwatch .display .min").text(),
                    $(".stopwatch .display .sec").text()].join(":");
        return time;
    };

    self.getTotalTime = function(){
        return $(".stopwatch .display .total").text();
    };

    self.loadQuestion = function(n){

		// redirect to this location after all questions are answered
        if(self.curr() === self.records.length){
            window.location = url;
        }

        self.language(self.records[self.curr()].Type__c);
        var lang = self.language().toLowerCase();
        var question = self.records[self.curr()].Question__c.replace(/\+/g,' ');
		question = unescape(question);
		
		// post the current question they are answering
		var dataString = 'question_id='+ self.records[self.curr()].Id;
		
		// check for practice answers
		if (self.records[self.curr()].Id != 0) {
			$.ajax({
			  type: 'POST',
			  url: url+'/challenges/quickquiz_answer',
			  data: dataString
			});
		}
		
        editor.setOption("mode",syntax[lang]);
        editor.setValue(question);

        for(var i = (EDITOR_MIN_LINES - editor.lineCount()); i > 0; i--){
            var lastLine = editor.lineCount() - 1;
            editor.setLine(lastLine, editor.getLine(lastLine) + '\n');
        }
        self.startTimer();
    };

    self.getAnswer = function(){
        return editor.getValue().replace(/\s/g, "");
    };

    self.submit = function(){
        self.stopTimer();

        var q = {
            id: self.records[self.curr()].Id,
            time: self.getTotalTime(),
            answer: self.getAnswer()
        };

		var dataString = 'question_id='+ q.id + '&answer='+encodeURIComponent(q.answer);
		
		// check for practice answers
		if (q.id != 0) {
			$.ajax({
			  type: 'POST',
			  url: url+'/challenges/quickquiz_answer',
			  data: dataString
			});
		}

        self.resetTimer();
        self.loadQuestion(self.curr(self.curr()+1));
    };

    self.loadQuestion(self.curr());

    return self;
}