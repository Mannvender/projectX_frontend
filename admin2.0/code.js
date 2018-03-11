class Selectize {
    constructor() {
        this.init();
    }

    init() {
        let initValue;
        $('.action-box').selectric({
            onInit: function (element) {
                initValue = $(this).val();
            },
            onChange: function (element) {
                if ($(this).val() !== initValue)
                    $(element).parents('form').submit();
            }
        });
    }
}

new Selectize();