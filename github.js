class Github {
  constructor(){
    this.client_id = '658aadfdb385d3814dee';
    this.client_secret = '9e37f020bf7bbf0ebe249207f455a88c4f6fd282';
  }

  async getUser(user){
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
 



