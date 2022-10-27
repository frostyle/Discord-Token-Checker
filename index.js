const axios = require('axios')
const colour = require('colour');

let token = "" // put your Token here for check

axios.get('https://discordapp.com/api/v7/users/@me', {
    'headers': {
      'authorization': token
    }
  }).then(async body => {
 
    if (!body) return;
    const json = body.data

    if (!json.id) {
        console.log('Invalid Token!\n'.red)
    } else if (!json.verified) {
        console.log('Account with unverified email!\n'.green)

          let phone = json.phone
          if(!phone){
        console.log(`User: `.blue + json.username .yellow +'#'.yellow +json.discriminator .yellow)
        console.log(`ID: `.blue + json.id .yellow)
        console.log(`Email: `.blue + json.email .yellow)
        console.log(`Phone: `.blue + '' .yellow)
        console.log(`Locale: `.blue + json.locale .yellow)
       return console.log(`Bio: `.blue + json.bio .cyan +'\n')
          } 

        console.log(`User: `.blue + json.username .yellow +'#'.yellow +json.discriminator .yellow)
        console.log(`ID: `.blue + json.id .yellow)
        console.log(`Email: `.blue + json.email .yellow)
        console.log(`Phone: `.blue + phone .yellow)
        console.log(`Locale: `.blue + json.locale .yellow)
        console.log(`Bio: `.blue + json.bio .cyan +'\n')
    } else {
        console.log('Account with verified email!\n'.green)
        
        console.log(`User: `.blue + json.username .yellow +'#'.yellow +json.discriminator .yellow)
        console.log(`ID: `.blue + json.id .yellow)
        console.log(`Email: `.blue + json.email .yellow)
        console.log(`Phone: `.blue + json.phone .yellow)
        console.log(`Locale: `.blue + json.locale .yellow)
        console.log(`Bio: `.blue + json.bio .cyan +'\n')
    }
}).catch(function (error) {
    console.log('Invalid Token!\n'.red)
  })
