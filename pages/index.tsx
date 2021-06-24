function HomePage() {
  return (
    <div>
      {process.env.ENV}Welcome to Next.js!
      {process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}
    </div>
  );
}

export default HomePage;
