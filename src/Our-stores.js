import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

function OurStores() {
    return (
      <section className="our-stores">
        <div className="container">
          <h2 className="title-h2">Наши магазины</h2>
          <Tabs>
            <TabList className="our-stores__box-button">
              <Tab className="our-stores__button">п.Щельяюр</Tab>
              <Tab className="our-stores__button">п.Вертеп</Tab>
              <Tab className="our-stores__button">с.Краснобор</Tab>
              <Tab className="our-stores__button">д.Диюр</Tab>
            </TabList>

            <div className="our-stores__box-map">
              <TabPanel >
                <iframe title='1' className="our-stores__map our-stores__map_1" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af0114071001831eb6c568463c61b199c0ef00b322c0e48bbd1c1a56d1a06dd5c&amp;amp;source=constructor" width="100%" height="354"></iframe>
              </TabPanel>

              <TabPanel >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afde7ead6a32e9abaf1c60037a2b7ee7121acff0d80402e36da854316217da39b&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
              </TabPanel>

              <TabPanel >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae54973fff26dbe1960942d2289f3e9a0b73a6556f945195a544bed22f5be4fe&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
              </TabPanel>

              <TabPanel >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f5115cbb10fddd662bb5e68428d8099d2dad5dfcbed9c9411b00a9703c5ebf2&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    )
}

//         <section className="our-stores">
//         <div className="container">
//           <h2 className="title-h2">Наши магазины</h2>
//           <div className="our-stores__box-button">
//             <button className="our-stores__button our-stores__button_activ" type="button">п.Щельяюр</button>
//             <button className="our-stores__button" type="button">п.Вертеп</button>
//             <button className="our-stores__button" type="button">с.Краснобор</button>
//             <button className="our-stores__button" type="button">д.Диюр</button>
//           </div>
//           <div className="our-stores__box-map">
//             
//           </div>
//         </div>
//       </section>





// function OurStores() {
//     return (
//         <section className="our-stores">
//         <div className="container">
//           <h2 className="title-h2">Наши магазины</h2>
//           <div className="our-stores__box-button">
//             <button className="our-stores__button our-stores__button_activ" type="button">п.Щельяюр</button>
//             <button className="our-stores__button" type="button">п.Вертеп</button>
//             <button className="our-stores__button" type="button">с.Краснобор</button>
//             <button className="our-stores__button" type="button">д.Диюр</button>
//           </div>
//           <div className="our-stores__box-map">
//             <iframe title='1' className="our-stores__map our-stores__map_1" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af0114071001831eb6c568463c61b199c0ef00b322c0e48bbd1c1a56d1a06dd5c&amp;amp;source=constructor" width="100%" height="354"></iframe>
//             <iframe title='2' className="our-stores__map our-stores__map_2" src="https://yandex.ru/map-widget/v1/?um=constructor%3Afde7ead6a32e9abaf1c60037a2b7ee7121acff0d80402e36da854316217da39b&amp;amp;source=constructor" width="100%" height="354"></iframe>
//             <iframe title='3' className="our-stores__map our-stores__map_3" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae54973fff26dbe1960942d2289f3e9a0b73a6556f945195a544bed22f5be4fe&amp;amp;source=constructor" width="100%" height="354"></iframe>
//             <iframe title='4' className="our-stores__map our-stores__map_4" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f5115cbb10fddd662bb5e68428d8099d2dad5dfcbed9c9411b00a9703c5ebf2&amp;amp;source=constructor" width="100%" height="354"></iframe>
//           </div>
//         </div>
//       </section>
//     )
// }

export default OurStores;