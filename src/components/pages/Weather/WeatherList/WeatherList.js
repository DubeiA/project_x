import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { WeatherCard } from '../WeatherCard/WeatherCard';
import {
  getWeatherCurrent,
  getWeatherLocation,
} from '../../../../redux/weather/selectors';

import css from './WeatherList.module.css';

import MediaQuery from 'react-responsive';

import { MobileWeatherCard } from '../MobileWeatherCard/MobileWeatherCard';

export const WeatherList = () => {
  const location = useSelector(getWeatherLocation);
  const current = useSelector(getWeatherCurrent);

  return (
    <>
      <MediaQuery minWidth={769}>
        <div className={css.container}>
          <ul className={css.list}>
            {location.map((locat, index) => {
              const curr = current[index];

              return (
                <li
                  className={curr.cloud >= 50 ? css.itemCloud : css.itemSun}
                  key={nanoid()}
                >
                  <WeatherCard data={locat} curr={curr} />
                </li>
              );
            })}
          </ul>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className={css.container_tel}>
          <ul className={css.list}>
            {location.map((locat, index) => {
              const curr = current[index];
              return (
                <li
                  className={curr.cloud >= 50 ? css.itemCloud : css.itemSun}
                  key={nanoid()}
                >
                  <MobileWeatherCard data={locat} curr={curr} />
                </li>
              );
            })}
          </ul>
        </div>
      </MediaQuery>
    </>
  );
};
