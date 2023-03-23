
# LuckyBird Development Assessment 

The project was to recreate a design provided in figma.

We had to use react to create the project. I chose you use nextJS as this allowed me to handle the backend components as well.


## Setup

To build this project run

## How to set up.

### 1. Clone the project to your local computer

#### Using HTTPS
```bash
git clone https://github.com/stokedproductions/luckybird.git
```

#### using git cli
```bash
gh repo clone stokedproductions/luckybird
```

### 2. Install dependencies
Make sure you are in your project directory and then
```bash
npm install 
```

### 3. Create your .env file in the root directory of your project
These are fields needed to use SENDGRID to make the contact form send email notifications
```bash
NOTIFICATION_EMAILS=example@example.com,secondemail@example.com
SENDGRID_API_TOKEN=YOUR_TOKEN_HERE

```

### 4. Run the project
```bash
npm run dev
```

See your project on localhost:3000



## CSS Used

I Choose to use Tailwind CSS for my project, as it allows rapid development and allows a convient way to handle multiple screen sizes.

I had to use some standard css as well.

## Issues faced and if I had more time

I did find it hard to do the curves, in the end I used SVG images when needed but I would have liked to have done it all with CSS. I had issues getting everything to line up nicely when the screen goes beyond 1920px that the design was made. I had to give the page a max-width of 1920px as per the design. I don't like that but under the time constraints it was a trade off to keep to the desinger.

I would have also used converted all the px measurements to rems so that it would have scaled better.

If there was more time I would have liked to do more on the mobile screen.

