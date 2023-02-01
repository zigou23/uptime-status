import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于 <Link to='//uptimerobot.com/' text='UptimeRobot' /> 接口制作，检测频率 30 min</p>
          <p>You can visit <Link to='//stats.uptimerobot.com/jV3LYSY5AX' text='this page' /> (pw:123123) that if the page doesn't load.</p>
          <p>&copy; 2023 Made by <Link to='//status.org.cn/' text='status' /> & <Link to='//github.com/yb/uptime-status/' text='GitHub' /> , Modified by <Link to='//github.com/zigou23/uptime-status/' text='zigou' />., Version {Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
