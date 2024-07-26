import Dice from "./components/Dice";
import {useState} from "react";

function App() {
  const [value, setDiceValue] = useState(0); // картинка кубика
  const [showText, setShowText] = useState(true); // надпись Start to Roll!
  const [active, setActive] = useState(false); // анимация картинки
  const [activeBtn, setActiveBtn] = useState(true); // активность кнопки RollDice!
  const [timerId, setTimerId] = useState(null); // идентификатор таймера

  return (
    <div>
      <Dice 
        images={[
          `${process.env.PUBLIC_URL}/images/dice.png`,
          `${process.env.PUBLIC_URL}/images/dice1.png`,
          `${process.env.PUBLIC_URL}/images/dice2.png`,
          `${process.env.PUBLIC_URL}/images/dice3.png`,
          `${process.env.PUBLIC_URL}/images/dice4.png`,
          `${process.env.PUBLIC_URL}/images/dice5.png`,
          `${process.env.PUBLIC_URL}/images/dice6.png`,
        ]} 

        value={value}
        showtext={showText}
        active={active}
        activeBtn={activeBtn}
        
        onClick={() => {
          setActiveBtn(false);
          setActive(true);
          
          const timer = setTimeout( () => {
            setActiveBtn(true);
            setActive(false);
            setDiceValue(Math.floor(Math.random(value) * 6) + 1);
            setShowText(false);
          }, 2000);

          setTimerId(timer); // Сохраняем идентификатор таймера
        }}

        onClickSet={() => {
          setActive(false);
          setDiceValue(value * 0); 
          setShowText(true);
          setActiveBtn(true);

          if (timerId) {
            clearTimeout(timerId); // Отменяем таймер, если он был запущен
          }
        }}
      />    
    </div>
  );
}

export default App;
