# Keystone Digital Quote Builder

A live quote builder for Keystone Digital, my web design business in Surrey. Visitors choose a website package, add-ons and a monthly care plan, watch the price update as they go, and send me the full spec by email.

**Live Site:** [stevejeffs.github.oi/quote-builder] (https://stevejeffs.github.io/quote-builder/)

## What it does

- Choose a Starter, Standard or Premium package
- Tick add-ons, with Google Business Profile included free on Standard and Premium
- Add extra pages and copywriting by the page
- Pick a monthly care plan
- See a live receipt with the project total and monthly cost
- fill in a validated enquiry form that sends the full quote as a pre-filled email
- Works on mobile, including iPhone

## Built with

- React
- Vite
- Plain CSS
- GitHub Actions, deploying to GitHub Pages

  ## How it's built

  - All prices live in one date file, `src/data/pricing.js`. Changing a price or adding an add-on there updates the list, the receipt and the email.
  - State lives in `App`, and components receive values and functions through props.
  - Totals are worked out from state on every render rather than stored separately.
  - One reuseable `CountInput` component handles both extra pages and copywriting.
 
  ## What I learned

  ## What I learned

This was my first React project. I built it with AI guiding me, typing every line by hand rather than copying and pasting, and making sure I understood each part before moving on.

- **Props and state:** how a value lives in `App` and gets handed down to a component, and why the name on the tag has to match what the component reads.
- **Reading errors:** "is not defined" usually means a name doesn't match, like `CopyPrice` instead of `copyPrice`. I began fixing these myself from the error message.
- **Small details matter:** typos, a capital letter, or single quotes instead of backticks break things. Typing everything by hand taught me to spot them.
- **Making my own product decisions:** I chose per-page copywriting so clients aren't overcharged, moved the domain cost onto the price side, and lined up figures on the receipt. I tried writing each change myself before asking for help.
- **Testing on a real phone:** the desktop phone view looked fine, but my iPhone zoomed into inputs with text under 16px and the page wobbled sideways. I only found it by testing on the device.
- **Where I'm at:** I can follow and adapt code well, but I can't yet write a component from a blank page. I'm now practising rebuilding components from memory to close that gap.
 
    ## What's next

    - Replace the email link with Netlify Forms, so quotes arrive without the visitor needing an email app
    - Save a quote in progress so it survives a page refresh
   
## Run it locally

```
npm install
npm run dev
```

built by Steve Jeffs.
