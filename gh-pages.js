import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
        branch: 'gh-pages',
        repo: 'https://github.com/melanki/melanki.github.io.git', // Update to point to your repository  
        user: {
            name: 'Marensius Bae Pettersen', // update to use your name
            email: 'marensius.pettersen@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete')
    }
)