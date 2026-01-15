import "./App.css";
import RecPlayerN from "./components/RecPlayer.jsx";

function App() {
  let items = [
    {
      id: "Обійми",
      url: "https://cdn4.drivemusic.club/dl/online/PL0EPCtc2nGP5pNxoZiIpg/1768325017/download_music/2013/02/okean-elzi-obijjmi.mp3",
    },
    {
      id: "На Небі",
      url: "https://cdn5.drivemusic.club/dl/online/wjvmQ_TvOZIJ09Fdp7SDBQ/1768325247/download_music/2013/05/okean-elzi-na-nebi.mp3",
    },
    {
      id: "Не Твоя Війна",
      url: "https://cdn5.drivemusic.club/dl/online/uZQ0xgQlyMoexnargkVExQ/1768325426/download_music/2015/04/okean-elzi-ne-tvoja-vijjna.mp3",
    },
    {
      id: "Без бою",
      url: "https://cdn2.drivemusic.club/dl/online/uLdbkU9Sc4h00neWULOoSg/1768325426/download_music/2023/08/okean-elzi-bez-boju.mp3",
    },
    {
      id: "З нею",
      url: "https://cdn4.drivemusic.club/dl/online/ObLIVoI0mdocAfQvQ0dG0A/1768325426/download_music/2013/05/okean-elzi-z-neju.mp3",
    },
    {
      id: "Караван",
      url: "https://cdn5.drivemusic.club/dl/online/eA2Wfcua586F7QKJ619fEA/1768325426/download_music/2013/05/okean-elzi-karavan.mp3",
    },
    {
      id: "Стріляй",
      url: "https://cdn5.drivemusic.club/dl/online/pVABusKkrxaUa4-ViM9U6Q/1768325247/download_music/2013/04/okean-elzi-striljajj.mp3",
    },
    {
      id: "Коко Шанель",
      url: "https://cdn4.drivemusic.club/dl/online/5_2P7cP9D6FxmTZCge85DA/1768325426/download_music/2017/07/okean-elzi-koko-shanel.mp3",
    },
    {
      id: "Misto vesni",
      url: "",
    },
    {
      id: "Пори року",
      url: "https://cdn2.drivemusic.club/dl/online/8SgvbzlUm94IhZmcpD0iBg/1768325426/download_music/2013/05/okean-elzi-pori-roku.mp3",
    },
  ];
  const handleSelectItem = (item) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <RecPlayerN
          items={items}
          heading="Записи"
          // heading="Records"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
