import hCaptchaPlugin from "@cloudflare/pages-plugin-hcaptcha";



export const onRequestPost = [
  hCaptchaPlugin({
    secret: "0x614964DEfb0F4131a26F0B3153bedCa147EAf218",
    sitekey: "d7e833ff-9cb4-4f36-9c43-f1cc94c32c54",
  }),
  (async ({ request }) => {
    // Request has been validated as coming from a human


    const formData = await request.formData()


    // Store user credentials


    return new Response("Successfully registered!")
  })

];
