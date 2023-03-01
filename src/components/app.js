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
          <p>Based on <Link to='//uptimerobot.com/' text='UptimeRobot' /> API, the detection frequency is 30 minutes.</p>
          <p>© 2023 Transplanted from <Link to='//github.com/yb/uptime-status/' text='yb/uptime-status' />, Modified by <Link to='//github.com/zigou23/uptime-status/' text='zigou23' />.</p>
        </div>
      </div>
    </>
  );
}

export default App;
