export function createUserStore() {
    return {
        firstName: '',
        lastName: '',
        show: false,
        setFirstName(str) {
            this.firstName = str;
        },
        setLastName(str) {
            this.lastName = str;
        },
        showModal() {
            this.show = true;
        },
        hideModal() {
            this.show = false;
        },
        validate() {
            let error = null;
            if (this.lastName === '' && this.firstName === '') {
                error = "Поля Имя и Фамилия не заполнены!"
            } else if (this.lastName === '') {
                error = 'Поле Фамилия не заполнен! '
            } else if (this.firstName === '') {
                error = 'Поле Имя не заполнен!'
            }

            return error;
        }
    }
}