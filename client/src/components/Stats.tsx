import React, {Component} from 'react'

interface IProps {
    
}

interface IState {

}

export default class Stats extends Component<IProps, IState> {
    render() {
        return (
            <div className='grid grid-cols-3 gap-4 py-6 px-3'>
                <div className="stats shadow bg-[#222222]/60 border-2 border-[#222222]">
                  <div className="stat">
                    <div className="stat-title text-white">Wins</div>
                    <div className="stat-value text-white">231</div>
                  </div>
                </div>
                <div className="stats shadow bg-[#222222]/60 border-2 border-[#222222]">
                  <div className="stat">
                    <div className="stat-title text-white">Losses</div>
                    <div className="stat-value text-white">231</div>
                  </div>
                </div>
                <div className="stats shadow bg-[#222222]/60 border-2 border-[#222222]">
                  <div className="stat">
                    <div className="stat-title text-white">Win Ratio</div>
                    <div className="stat-value text-white">42%</div>
                  </div>
                </div>
              </div>
        )
    }
}
