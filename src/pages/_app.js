import '@styles/styles.css';
import { PageTransition } from 'next-page-transitions';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <PageTransition timeout={1500} classNames='h-full w-full page-transition'>
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </>
  );
}

export default MyApp;
