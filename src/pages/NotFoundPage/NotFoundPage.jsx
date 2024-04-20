const NotFoundPage = () => {
  const goBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <h1>Page not found</h1>
      <p>Sorry, the page you requested was not found.</p>
      <button onClick={goBackToHome}>Go back</button>
    </>
  );
};

export default NotFoundPage;
