
import './App.css';
import React,  { useState, useEffect} from 'react'
import Space from './components/Spaces/Space';
import Room from './components/Rooms/Room';
import localeEnMessages from "./locales/en.json"
import localeEsMessages from "./locales/es.json"
import {FormattedMessage, IntlProvider} from 'react-intl';

function App() {

  const [data, setData] = useState([])
  const [space, setSpace] = useState("")
  const [rooms, setRooms] = useState([])
  const [usefullData, setUsefullData] = useState([])

  const [intl, setIntl] = useState({
    locale: 'en',
    messages: localeEnMessages,
})

  useEffect( () =>{
    const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    fetch(URL).then(res=>res.json()).then(res=>{
      console.log(res)
      setData(res);
  })
  }, [])


  useEffect(()=>{
    const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
    fetch(URL).then(res=>res.json()).then(res=>{
      console.log(res)
      setRooms(res);
    })
}, [])


// Cambio de idiomas
function changeLanguage(){
  if(intl.locale === "es"){
    setIntl({
      locale: 'en',
      messages: localeEnMessages,
      url: "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
  })
  }
  else{
    setIntl({
      locale: 'es',
      messages: localeEsMessages,
      url: "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"
  })
  }
}


    // Callaback para el paso de información 
    const handleClickOnCard = (data) => {
      setUsefullData(rooms.filter((element) => element.homeId === data.id))
      console.log(usefullData)
      setSpace(data.id)
  
    }

  return (
    <IntlProvider locale={intl.locale} messages= {intl.messages}> 
    <div className="container">
    <button onClick={changeLanguage}><FormattedMessage id="language"/></button>
    <h1><FormattedMessage id="spaces"/></h1>
      <div className='row'>
      {data.map( (elemnt) => (
        <div className='col-lg-3'>
        <Space spaces={elemnt} onClickCallback={handleClickOnCard}></Space>
        </div>
      )
      )}
      </div>
      <Room rooms={usefullData}></Room>
      </div>
    </IntlProvider>
  );
}

export default App;
