# Stripe Payment Links Setup

This site is set up for Stripe Payment Links rather than a full cart or custom checkout.

## How it works

- Each product page has a primary buy button.
- Those buttons read their Stripe URL from `stripe-links.js`.
- If a Stripe URL is blank, the button falls back to `contact.html`.

## Step 1: Create the Stripe payment links

Create one Stripe Payment Link for each product:

- Pet Impression Kit
- Pet Memory Stone
- Human Memory Stone

## Step 2: Paste the links into the config

Open [stripe-links.js](/Users/benjaminferguson/Desktop/memorystones-org/stripe-links.js) and replace the empty strings:

```js
window.MemoryStonesStripeLinks = {
  petImpressionKit: "https://buy.stripe.com/your-link-here",
  petMemoryStone: "https://buy.stripe.com/your-link-here",
  humanMemoryStone: "https://buy.stripe.com/your-link-here"
};
```

## Notes

- This is the simplest good-fit setup for the current static site.
- It avoids building a cart or backend before you actually need one.
- You can still keep sensitive or custom memorial situations as contact-first.
