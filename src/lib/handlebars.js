module.exports = {

    //Options = Active - Inactive
    showOptionsEstate: function (estado, options) {
        if (estado == 'A') {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    //Options = Active - Inactive
    showNameEstate: function (estado, options) {
        if (estado == 'A') {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    //show medios digitales
    showMediosDigitales: function (value1) {
        if (value1 === "") {
            return 'none';
        } else {
            return 'block';
        }
    },

    //Show Tipo Modulo
    tipoModulo: function (value1) {
        if (value1 == 1) {
            return 'Aplicación Móvil';
        } else {
            return 'Dashboard Web';
        }
    }
}