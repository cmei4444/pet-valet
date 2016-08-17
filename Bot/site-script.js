var conditions = {
	appToken: "2ck6ede8pdtgepxnb9vupg4km",
	//embedded: true, 
	givenName: "meowmeow",
	customText: {
		headerText: 'Talk to our chatbot!',
	//	inputPlaceholder: 'Type a message...',
	//	sendButtonText: 'Send',
	}
};

function preventEnterSubmit(e) {
    if (e.which == 13) {
        var $targ = $(e.target);

        if (!$targ.is("textarea") && !$targ.is(":button,:submit")) {
            var focusNext = false;
            $(this).find(":input:visible:not([disabled],[readonly]), a").each(function(){
                if (this === e.target) {
                    focusNext = true;
                }
                else if (focusNext){
                    $(this).focus();
                    return false;
                }
            });

            return false;
        }
    }
}

function calc_cost() {
	var duration = document.getElementById("duration").value;
	var cost = (duration/60) * 15;
	var x = document.getElementById("calculated-cost");
	x.innerHTML = "$" + cost.toFixed(2);
}

function sign_tester() {
	if (GoogleAuth.isSignedIn.get()) {
		var x = document.getElementById("sign-in-test");
		x.innerHTML = "signed in";
	}
}
		
