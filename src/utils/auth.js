//import VueJwtDecode from 'vue-jwt-decode';

export default {
    userIsLogged() {
        if(process.browser) {
            let token = localStorage.getItem("jwt");
            if (token) {
                return true
                //console.log(token)
               /* let parseToken = VueJwtDecode.decode(token);
                if (parseToken.exp > Date.now() / 1000000000) {
                    return true
                  } else {
                   // this.deleteToken()
                    return false
                  }*/
            }
        } else {
            return false
        }

    },
    deleteToken() {
        localStorage.removeItem('jwt');
    },
    logoutUser() {
      this.deleteToken();
      window.location.reload()
    },
}