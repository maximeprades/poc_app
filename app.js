(function() {

  return {
    events: {
      'app.activated':'displayPOC'
    },

    displayPOC: function() {
		this.switchTo('poc');
    }
  };

}());
