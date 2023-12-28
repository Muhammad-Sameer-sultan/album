This project is an attempt at building a Photo Album app as specified in this [hackathon challange](https://github.com/panaverse/learn-nextjs/blob/main/HACKATHONS/00.hackathon_zero/readme.md)

This [tutorial](https://www.youtube.com/watch?v=MC6D4vylKTc) by [Web Dev Cody](https://github.com/webdevcody) has been followed

App is [deployed](https://cloudinary-photos-app-one.vercel.app/) using Vercel


## Technologies Used

- Next.js
- Cloudinary
- Shadcn UI
- Tailwind CSS

## Running Locally

1. Clone the repository
    ```
    git clone https://github.com/AbdullahKhetran/cloudinary-photos-app.git
    ```

2. Add environment variables

    `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` from [cloudinary dashboard](https://console.cloudinary.com)

    `NEXT_PUBLIC_UPLOAD_PRESET_ID` from [media settings](https://console.cloudinary.com/settings/upload)

    `CLOUDINARY_URL` from [cloudinary dashboard](https://console.cloudinary.com)

3. Install the packages
    ```
    npm i
    ```

4. Start the server
    ```
    npm run dev
    ```

5. Visit [localhost](http://localhost:3000/)