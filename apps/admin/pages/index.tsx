function HomePage() {
  return (
    <div>
      {process.env.ENV}Welcom to Next.js!
      {process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}
    </div>
  );
}

export default HomePage;
