$(document).ready(function(){
    // Attach event to password field
    var $progress = $(".password-stength-progress");
    var $progressValue = $(".password-strength-progress-value");
    var $verdict = $(".password-strength-verdict");

    function setProgress(target, value) {
        $progressValue.css("width", value + "%");
    }
    function setVerdict(target, verdict) {
        $(target).html(verdict);
    }

    $(".password").on("keyup change", function(e) {
        console.log("Calculating");
        var value = $(e.target).val();

        if (value.length >= 0 && value.length < 5) {
            // Weak
            setProgress($progress, 25);
            setVerdict($verdict, "Weak");
        }
        else if (value.length >= 5 && value.length < 10) {
            // Fair
            setProgress($progress, 50);
            setVerdict($verdict, "Fair");
        }
        else if (value.length >= 10 && value.length < 15) {
            // Good
            setProgress($progress, 75);
            setVerdict($verdict, "Good");
        }
        else if (value.length >= 15 && value.length < 20){
            // Strong
            setProgress($progress, 90);
            setVerdict($verdict, "Strong");
        }
        else {
            // Very Strong
            setProgress($progress, 100);
            setVerdict($verdict, "Very Strong");
        }
    });
});
