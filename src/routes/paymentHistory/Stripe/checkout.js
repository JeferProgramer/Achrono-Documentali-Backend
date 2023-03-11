const stripeAPI = require('stripe')('sk_test_51Mi3c7DX8XlPJvtBiLBBXDHXAPRFr0ySshYD4jshqdbTwot4WuVRLkYhn4pcD8kCiGAuljtA8a0ez4BnYC1mkhwp00Xzzg440j')
/* const domainUrl = process.env.WEB_APP_URL; */

const createCheckoutSession = async (req, res) => {
   //const domainUrl = 'https://terapeando.vercel.app'
   const domainUrl = 'http://localhost:3000'
   const { line_items, customer_email } = req.body;

   if (!line_items || !customer_email) {
      return res.status(400).json({ error: 'missing requires session parameters' })
   }
   try {
      let session = await stripeAPI.checkout.sessions.create({
         payment_method_types: ['card'],
         mode: 'payment',
         line_items: line_items,
         customer_email: customer_email,
         success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
         cancel_url: `${domainUrl}/canceled`,
      })
      res.status(200).json({ sessionId: session.id })
   } catch (error) {
      console.log(error)
      res.status(400).json({ error: 'an error occured, unable to create session' })
   }
}

module.exports = {
   createCheckoutSession,
}