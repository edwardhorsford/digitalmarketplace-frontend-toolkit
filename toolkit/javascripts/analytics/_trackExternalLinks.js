(function (GOVUK) {
  GOVUK.GDM.analytics.trackExternalLinks = {
    'init': function () {
      this.trackExternalLinks();
    },

    trackExternalLinks: function () {
      $('a').filter(function () {
        return this.hostname && this.hostname !== GOVUK.GDM.analytics.location.hostname();
      }).on('click', function (e) {
        var $target = $(e.target);
        var category = 'external-link';
        var action = $target.text();
        var label = $target.attr('href');
        GOVUK.GDM.analytics.events.sendEvent(category, action, label);
      });
    }
  };
})(window.GOVUK);
