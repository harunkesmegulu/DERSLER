const handleChange = (e) => {
    setChange({
      ...change,
      [e.target.id]: e.target.value
    });
  };