/*****
Language: javascript

This file describes the goal class. The constructor includes all fields that
are also used in the goals table. Questions and responses are arrays that are populated
when a coach/executive adds a question or response to this goal. All fields have
a getter/setter function. 

****/

class Goal {
 	constructor(obj) {
		this.title = obj.title;
		this.description = obj.description;
    this.goal_id = obj.goal_id;
    this.coach_id = obj.coach_id;
    this.executive_id = obj.executive_id;
    this.progress = obj.progress;
    this.frequency = obj.frequency;
    this.date_assigned = obj.date_assigned;
    this.currDueDate = obj.currDueDate;
    this.progress_acceptance = obj.progress_acceptance; 
    var questions = [];
    this.questions = questions;
    var responses = [];
    this.responses = responses;

	}
  get goal_responses() {
    return this.responses;
  }
  set goal_responses(val) {
    this.responses = val;
  }
  get goal_due_date() {
    return this.currDueDate;
  }
  set goal_due_date(val) {
    this.currDueDate = val;
  }
	get goal_title() {
		return this.title;
	}
  set goal_title(val) {
    this.title = val;
  }

  get goal_questions(){
    return this.questions;
  }

  set goal_questions(val){
    this.questions = val;
  }

	get goal_description() {
		return this.description;
	}
  set goal_description(val) {
    this.description = val;
  }

	get goal_date() {
		return this.date_assigned;
	}

  set goal_date(val) {
    this.date_assigned = val;
  }

  set id(val) {
    this.goal_id = val;
  }
  get id() {
    return this.goal_id;
  }
  get goal_coach_id(){
    return this.coach_id;
  }
  set goal_coach_id(val) {
    this.coach_id = val;
  }

  get goal_exec_id() {
    return this.executive_id;
  }
  set goal_exec_id(val) {
    this.executive_id = val;
  }
  get goal_progress() {
    return this.progress;
  }
  set goal_progress(val) {
    this.progress = val;
  }

  get progress_update() {
    return this.progress_acceptance;
  }
  set progress_update(val) {
    this.progress_acceptance = val;
  }

  set goal_frequency(val) {
    this.frequency = val;
  }
  get goal_frequency() {
    return this.frequency;
  }

}

module.exports =  {
  Goal
};
