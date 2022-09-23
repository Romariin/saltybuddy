import * as React from 'react';

export interface ITestProps {
}

export default class Test extends React.Component<ITestProps> {
  public render() {
    return (
      <div>
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          Viteplate
        </h1>
      </div>
    );
  }
}
