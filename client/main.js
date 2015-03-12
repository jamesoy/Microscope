Tracker.autorun(function(){
    if (Meteor.user() && !Meteor.loggingIn()) {
        var intercomSettings = {
            name: Meteor.user().username,
            email: Meteor.user().emails[0].address,
            created_at: Math.round(Meteor.user().createdAt/1000),
            favorite_color: _.sample(['blue','red','green','yellow']),
            user_id: Meteor.user()._id,
            user_hash: Meteor.user().intercomHash,
            widget: {
                activator: '#Intercom',
                use_counter: true
            },
            app_id: "nntrjk3y"
        };
        Intercom('boot', intercomSettings);
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/nntrjk3y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    }
});
