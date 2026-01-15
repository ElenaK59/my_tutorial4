function ChildComponent({ itemurls, audioErrors, setAudioErrors }) {
  const handleError = (url) => {
    setAudioErrors((prev) => ({
      ...prev,
      [url]: "Аудио недоступно",
    }));
  };

  return (
    <div>
      <ul>
        {itemurls.map((item) => (
          <li key={item}>
            <p className="error-message">{audioErrors[item] || ""}</p>
            <audio
              className="audio-player"
              controls
              src={item}
              preload="none"
              onError={() => handleError(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;
