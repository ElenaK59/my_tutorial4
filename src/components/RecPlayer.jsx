import { useState } from "react";
import ChildComponent from "./ChildComponent";
import s from "./RecPlayer.module.css";

const RecPlayer = ({ items, heading }) => {
  const [selectedIds, setSelectedIds] = useState([]); // Массив ID выбранных элементов
  const [urls, setUrls] = useState([]); // Состояние для хранения URL-ов
  const [currentArray, setCurrentArray] = useState([]);
  // Состояние для хранения текущего массива
  const [content, setContent] = useState(null); // Состояние для хранения компонента
  const [audioErrors, setAudioErrors] = useState({});
  const arrayFirst = [];
  const showIt = () => {
    setContent(<ChildComponent />); // Устанавливаем компонент в состояние
  };
  const arrayFull = [...items];
  // Функция для смены массива
  const showArray = (arr) => {
    setCurrentArray(arr);
  };
  const onClickAdd = (e) => {
    e.preventDefault();
    const arrayAdd = items.filter((item) => selectedIds.includes(item.id));
    setCurrentArray(arrayAdd);
    const newUrls = arrayAdd.map((item) => item.url);
    setUrls((prev) => [...prev, ...newUrls]);
  };
  const handleCheckboxChange = (id, checked) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((el) => el !== id)
    );
  };
  const onClickClean = () => {
    setSelectedIds([]);
    setUrls([]);
    showArray(arrayFirst);
  };
  const clearAudioErrors = () => {
    setAudioErrors({});
  };
  // Функция-обёртка
  const handleClick = () => {
    onClickClean(); // Вызываем первую функцию
    clearAudioErrors(); // Вызываем вторую (можно передавать event, если нужно)
  };
  return (
    <>
      <div className={s.container}>
        <h1>{heading}</h1>
        {/*  2. Передаем массив в дочерний компонент как prop  */}
        <ChildComponent
          itemurls={urls}
          audioErrors={audioErrors}
          setAudioErrors={setAudioErrors}
        />
        <div className={s.listbutton}>
          <button
            type="button"
            className={s.button}
            onClick={() => showArray(arrayFull)}
          >
            {/* Create Playlist */}
            Создать плейлист
          </button>
          <button type="button" className={s.button} onClick={onClickAdd}>
            {/* Play recordings */}
            Запустить выбранные
          </button>
          <button
            type="button"
            className={s.buttonhidden}
            onClick={showIt}
          ></button>
          {content}
          <button type="button" className={s.button} onClick={handleClick}>
            {/* Clean PlayList */}
            Очистить выбор
          </button>
        </div>
        <div className={s.listgroup}>
          {/* {currentArray.length === 0 && <p>No item found</p>} */}

          {currentArray.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                // checked={selectedIds.includes(item.id)}
                checked={
                  currentArray.some((item) => item.id === item.id) &&
                  selectedIds.includes(item.id)
                }
                onChange={(e) =>
                  handleCheckboxChange(item.id, e.target.checked)
                }
              />
              <label>{item.id}</label>
            </div>
          ))}
        </div>
        <p>Выбранные : {JSON.stringify(selectedIds)}</p>
      </div>
    </>
  );
};

export default RecPlayer;
