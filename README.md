# Full Stack Learning Management System (LMS) with Next.js 15

This project is a **Full Stack Learning Management System (LMS)** built with **Next.js 15**, **MySQL**, **Prisma**, and **NextAuth**, designed to deliver seamless learning experiences through modern technologies.

## [Demo](https://next-lms-liart.vercel.app/)

![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/lms/refs/heads/master/public/Screenshot%202024-12-02%20155320.png)

---

## Credits

**Name:** Antonio Erdeljac  
**Video Tutorial:** [Watch here](https://www.youtube.com/watch?v=Big_aFLmekI)

---

## Prerequisites

- **Node.js version 15.x or above**

---

## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/abdulhai-rawan/lms.git
```

### Install Dependencies

```bash
npm i
```

### Setup Environment Variables

Create a `.env` file in the root directory and populate it with the following variables:

```env
# General
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_TEACHER_ID=

# NextAuth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Prisma
DATABASE_URL=

# Uploadthing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Stripe (optional for payments)
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

## Database Setup with Prisma

Run the following command to push Prisma schema changes to your database:

```bash
npx prisma db push
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

---

## Available Commands

| Command | Description                              |
| ------- | ---------------------------------------- |
| `dev`   | Starts a development instance of the app |
