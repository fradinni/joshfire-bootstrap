/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2013, Joshfire, licensed under an MIT license
 * http://framework.joshfire.com/license
 */

define([
	'joshlib!utils/dollar'
   ,'models/user'
   ,'models/jnuine'
], function ($, User, Jnuine) {
	
	/**
	 * Application ENTRY POINT
	 *
	 */
	var initialize = function() {
		console.log('APPLICATION initialized !');

		// Display users
		var usersCollection = new User.collection();
		var jnuineCollection = new Jnuine.collection();

		function updateUsersList() {
			usersCollection.fetch({success: function(){
				_.each(usersCollection.models, function(user) {
					var tpl = 	'<li id="'+user.get('_id')+'" class="user">'+
									user.get('firstname')+' '+user.get('lastname')+
									'<a href="#" class="delete" id="'+user.get('_id')+'">Delete</a>'+
								'</li>';
					$("#users_list").append(tpl);
				});
				$(".user").bind('click', function() {
					$("#jnuine_owner").val($(this).attr('id'));
				});
				$(".user .delete").bind('click', function(e) {
					e.preventDefault();
					var user = new User.model({_id: $(this).attr('id')});
					user.destroy({success: function(model, response) {
						updateUsersList();
					}});
				});
			}});
		}


		function updateJnuineList() {
			jnuineCollection.fetch({success: function(){
				_.each(jnuineCollection.models, function(jnuine) {

					var tpl = 	'<li id="'+jnuine.get('_id')+'" class="jnuine">'+
									jnuine.get('name')+
									' <a href="#" class="delete" id="'+jnuine.get('_id')+'">Delete</a>'+
								'</li>';
					
					$("#jnuines_list").append(tpl);
				});
				
				$(".jnuine .delete").bind('click', function(e) {
					e.preventDefault();
					var jnuine = new Jnuine.model({_id: $(this).attr('id')});
					jnuine.destroy({
						success: function(model, response) {
							updateJnuineList();
						},
						error: function(model, response) {
							
						}
					});
				});
			}});
		}

		$("#user_submit").bind('click', function() {
			console.log('click');
			var user = new User.model({
			    fullname: $("input[name='fullname']").val()
			  , email: $("input[name='email']").val()
			  , password: $("input[name='password']").val()
			  , phone_number: $("input[name='phone_number']").val()
			  ,	email: $("input[name='email']").val()
			  , 'address.country': $("input[name='country']").val()
			  , roles: ["ADMIN", "USER"]
			});

			user.save({}, {
				success: function() {
					updateUsersList();
				},
				error: function(model, response, options) {
					var error = JSON.parse(response.responseText);
					alert(error.err);
				}
			});
		});


		$("#jnuine_submit").bind('click', function() {
			console.log('click');
			var jnuine = new Jnuine.model({
			    name: $("input[name='name']").val()
			  , owner: $("input[name='owner']").val()
			});

			jnuine.save(function(err) {
				if(!err) alert('jnuine saved.');
			});
		});

		updateUsersList();
		updateJnuineList();
	}
	

	// Exposed methods
	return {
		initialize: initialize
	}
});
