import nodeHtmlToImage from 'node-html-to-image'
import puppeteer, { Page, Browser } from 'puppeteer';

export class ProfileTemplate {

    // HTML Template
    public template: string;

    // Promise of the browser
    public browser: Promise<Browser>;

    // Username of the user
    private readonly username: string;

    // Avatar of the user
    private readonly avatar: string;

    // Banner of the user
    private readonly banner: string;

    constructor(username: string, avatar: string, banner: string) {
        
        this.username = username;
        this.avatar = avatar;
        this.banner = banner;

        this.browser = puppeteer.launch({
            headless: "new"
        });
        this.template = this.generate();
    }

    // This method will generate the HTML template
    public generate() {

        // HTML Template
        const generate = `
            <!DOCTYPE html><html><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <style> @import url('https:fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'); body { margin:0; padding: 0px; background: #13131a; ma
            rgin: 15px; max-width: 350px; max-height: 400px; } .container { display: flex; flex-direction: column; width: 350px; height: 400px; background-color: #0a0a0f; filter: drop-shadow(1px 1px 1px #0a0a0f   );; border-radius: 5px; } #profile_banner { position: fixed; width: 100%; height: 120px;object-fit: cover; z-index: -1; } #profile_image { margin-top: 45px; margin-left: 20px; width: 100px; border-radius: 50%; border: 4px solid #0a0a0f; } .profile { display: flex; flex-direction: column; } h1 { position: absolute; top: 150px; margin-left: 30px; color:white; font-family: 'Montserrat', sans-serif; font-size: 19px; font-weight: lighter; } span { color:#9797a1; font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: lighter; }   .badges { display: flex; flex-direction: row-reverse; position: relative; left: 195px; bottom: 20px; flex-wrap: wrap; max-width: 140px; float: -2; } .badge { width: 20px; height: 21px; margin-top: 6px; margin-left: 7px; border-radius: 3px; } </style> </head> <body> <div class="container"> <div class="profile"> <img id="profile_image" src="${this.avatar}" alt=""> <div class="badges"><img src="https:github.com/Debuggingss/discord-badges/blob/master/pngs_named/balance_lgbtq.png?raw=true" alt="" class="badge"><img src="https://cdn3.emoji.gg/emojis/1349-partner-badge.png" alt="" class="badge"><img src="https://cdn3.emoji.gg/emojis/9103-blurple-bug-hunter-2.png" alt="" class="badge"><img src="https://cdn3.emoji.gg/emojis/5590-server-owner.png" alt="" class="badge"><img src="https://github.com/Debuggingss/discord-badges/blob/master/pngs_named/staff.png?raw=true" alt="" class="badge"></div> <h1>${this.username}</h1> <img id="profile_banner" src="${this.banner}" alt=""></div> </div>  
            </body></html>
        `;

        return generate;
    }

    // This method will create the image
    public async create() {

        // Waiting for the browser to launch
        const browser = await this.browser;

        // Creating a new page
        const page = await browser.newPage();

        // Setting the viewport
        await page.setViewport({ width: 350, height: 400 });

        // Setting the content of the page
        await page.setContent(this.template);

        // Waiting for the page to load
        const image = await page.screenshot({ type: 'png' });

        // Closing the page
        await page.close();

        return image;
    }

    
}