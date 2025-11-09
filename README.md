# Creative Community Interest FormThe official landing page for [The Modding Community](https://moddingcommunity.com) utilizing [Astro](https://astro.build/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/)!



A website to collect interest and ideas for a new creative community focused on filmmaking, photography, videography, editing, and storytelling.This is a *work-in-progress*!



## About This Project## Running

Here are commands you can use to run the web server through Astro (for developer use).

This is an interest collection form created by Abhinav Pandey, a CSE second-year student, to gauge interest in starting a creative community in college. The form collects:

```bash

- Contact information (name, email)# Clone this repository.

- Academic details (year, branch)git clone https://github.com/modcommunity/website-processing

- Creative interests (filmmaking, photography, videography, editing, storytelling, etc.)

- Experience level# Change directory.

- Ideas and suggestionscd website-processing

- Time commitment preferences

- Additional thoughts and feedback# Install packages.

npm install

## Features

# Run Astro's dev server available on port 4321 by default.

- 📝 Comprehensive interest form# NOTE - You can pass `-- --host <address>` to listen on specific IP addresses (or all with 0.0.0.0).

- 🎨 Modern, responsive design# EX: npm astro dev -- --host 0.0.0.0

- 🎬 Focus on creative fieldsnpm run dev

- 💡 Collects ideas and suggestions```

- ✨ Beautiful gradient UI

- 📱 Mobile-friendlyIf you want to run this application in production, I recommend looking into [Docker](https://docs.astro.build/en/recipes/docker/).



## Tech Stack## Configuration (Env)

Here are supported environmental variables you can set typically in the `.env` file.

- **Framework**: Astro 5.x

- **UI Library**: React 19.x| Name | Default | Description |

- **Styling**: Tailwind CSS 4.x| ---- | ------- | ----------- |

- **Icons**: React Icons| `PUBLIC_GOOGLE_ANALYTICS_ID` | *N/A* | The Google Analytics ID to use. |

- **Animations**: Tailwind Motion| `PUBLIC_TITLE_MAIN` | # Creative Community Interest Form



## Getting StartedA website to collect interest and ideas for a new creative community focused on filmmaking, photography, videography, editing, and storytelling.



### Prerequisites## About This Project



- Node.js (v18 or higher)This is an interest collection form created by Abhinav Pandey, a CSE second-year student, to gauge interest in starting a creative community in college. The form collects:

- npm or yarn

- Contact information (name, email)

### Installation- Academic details (year, branch)

- Creative interests (filmmaking, photography, videography, editing, storytelling, etc.)

```bash- Experience level

npm install- Ideas and suggestions

```- Time commitment preferences

- Additional thoughts and feedback

### Development

## Features

```bash

npm run dev- 📝 Comprehensive interest form

```- 🎨 Modern, responsive design

- 🎬 Focus on creative fields

The site will be available at `http://localhost:4321/`- 💡 Collects ideas and suggestions

- ✨ Beautiful gradient UI

### Build- 📱 Mobile-friendly



```bash## Tech Stack

npm run build

```- **Framework**: Astro 5.x

- **UI Library**: React 19.x

### Preview Production Build- **Styling**: Tailwind CSS 4.x

- **Icons**: React Icons

```bash- **Animations**: Tailwind Motion

npm run preview

```## Getting Started



## Project Structure### Prerequisites



```text- Node.js (v18 or higher)

/- npm or yarn

├── public/

│   └── images/### Installation

├── src/

│   ├── components/```bash

│   │   ├── CommunityForm.tsx    # Main form componentnpm install

│   │   ├── Landing.astro         # Landing page layout```

│   │   ├── Header.tsx

│   │   ├── Footer.tsx### Development

│   │   └── ...

│   ├── layouts/```bash

│   │   └── Layout.astronpm run dev

│   ├── pages/```

│   │   └── index.astro

│   └── styles/The site will be available at `http://localhost:4321/`

└── package.json

```### Build



## Customization```bash

npm run build

### Form Fields```



To modify form fields, edit `src/components/CommunityForm.tsx`:### Preview Production Build



- Add/remove interest options in the `interestOptions` array```bash

- Modify form fields in the `FormData` interfacenpm run preview

- Update form validation as needed```



### Styling## Project Structure



- Main colors use purple/pink gradient theme```

- Customize colors in component className attributes/

- Global styles in `src/styles/Global.css`├── public/

│   └── images/

### Content├── src/

│   ├── components/

Update the landing page content in `src/components/Landing.astro`:│   │   ├── CommunityForm.tsx    # Main form component

│   │   ├── Landing.astro         # Landing page layout

- Hero section text│   │   ├── Header.tsx

- Feature cards│   │   ├── Footer.tsx

- Call-to-action sections│   │   └── ...

│   ├── layouts/

## Form Submission│   │   └── Layout.astro

│   ├── pages/

Currently, the form logs data to the console. To integrate with a backend:│   │   └── index.astro

│   └── styles/

1. Add a backend API endpoint└── package.json

2. Modify the `handleSubmit` function in `CommunityForm.tsx````

3. Consider using services like:

   - Google Forms (embed or API)## Customization

   - Formspree

   - Firebase### Form Fields

   - Custom backend API

To modify form fields, edit `src/components/CommunityForm.tsx`:

Example integration:- Add/remove interest options in the `interestOptions` array

- Modify form fields in the `FormData` interface

```typescript- Update form validation as needed

const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault();### Styling

  

  try {- Main colors use purple/pink gradient theme

    const response = await fetch('/api/submit', {- Customize colors in component className attributes

      method: 'POST',- Global styles in `src/styles/Global.css`

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(formData)### Content

    });

    Update the landing page content in `src/components/Landing.astro`:

    if (response.ok) {- Hero section text

      setSubmitted(true);- Feature cards

    }- Call-to-action sections

  } catch (error) {

    console.error('Submission error:', error);## Form Submission

  }

};Currently, the form logs data to the console. To integrate with a backend:

```

1. Add a backend API endpoint

## Next Steps2. Modify the `handleSubmit` function in `CommunityForm.tsx`

3. Consider using services like:

- [ ] Set up form submission backend   - Google Forms (embed or API)

- [ ] Add email notifications   - Formspree

- [ ] Create database to store responses   - Firebase

- [ ] Add analytics tracking   - Custom backend API

- [ ] Consider adding authentication (optional)

- [ ] Deploy to productionExample integration:



## Deployment```typescript

const handleSubmit = async (e: React.FormEvent) => {

This site can be deployed to:  e.preventDefault();

  

- **Vercel** (recommended for Astro)  try {

- **Netlify**    const response = await fetch('/api/submit', {

- **Cloudflare Pages**      method: 'POST',

- **GitHub Pages**      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(formData)

### Deploy to Vercel    });

    

```bash    if (response.ok) {

npm install -g vercel      setSubmitted(true);

vercel    }

```  } catch (error) {

    console.error('Submission error:', error);

## License  }

};

This project is open source and available under the MIT License.```



## Contact## Next Steps



Created by Abhinav Pandey - CSE 2nd Year- [ ] Set up form submission backend

- [ ] Add email notifications

---- [ ] Create database to store responses

- [ ] Add analytics tracking

**Note**: This is a community interest collection form, not an official registration. Responses are used to gauge interest and gather ideas for the creative community initiative.- [ ] Consider adding authentication (optional)

- [ ] Deploy to production

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Astro)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

This project is open source and available under the MIT License.

## Contact

Created by Abhinav Pandey - CSE 2nd Year

---

**Note**: This is a community interest collection form, not an official registration. Responses are used to gauge interest and gather ideas for the creative community initiative. | The primary title used with meta data. |
| `PUBLIC_TITLE` | The Modding Community | The title used with meta data. |
| `PUBLIC_FAV_ICON` | /favicon.ico | The website's icon to use with meta data. |
| `PUBLIC_SOCIAL_MEDIA_IMAGE` | /icon-wrench02-200x201.png | The  image to use with social media meta data. |
| `PUBLIC_URL` | https://moddingcommunity.com | The URL to use with meta data. |
| `PUBLIC_DESCRIPTION` | ... | The description to use with social media and general meta data. |

## Contributions
Users are welcomed to create PRs if they see any improvements that can be made!

Users who help will be listed under credits below.

## Credits
* [Christian Deacon](https://github.com/gamemann)