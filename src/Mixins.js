import moment from "moment";
export default {
    methods: {
        formatData (value) {
            if (value) {
                return moment(value).format('DD MMM YYYY')
            }
    },
  }
}