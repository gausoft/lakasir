import { ArrowLeftIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { classNames } from "../../utils/helpers";
interface ILayoutInterface {
  children: JSX.Element;
  title?: string;
  back?: boolean;
  background?: string;
  textColor?: string;
  className?: string;
  append?: JSX.Element;
}

const Layout = (props: ILayoutInterface) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.title || props.back ? (
        <div
          className={classNames(
            `text-${props.textColor}`,
            `bg-${props.background}`,
            "flex items-center max-h-14 h-14 font-semibold py-8 text-xl mx-auto w-full top-0 fixed z-50 bg-gray-100-c drop-shadow-2xl-c shadow-black-c"
          )}
        >
          {props.back ? (
            <span
              className="cursor-pointer ml-2 h-5 w-5"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </span>
          ) : (
            ""
          )}
          <p className="text-center w-full mr-8">{props.title}</p>
        </div>
      ) : (
        ""
      )}
      {props.append ? props.append : <div className="h-20 w-20"></div>}
      <div className={classNames("mx-auto w-11/12")}>{props.children}</div>
    </>
  );
};

export default Layout;
