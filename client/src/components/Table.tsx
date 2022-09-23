import React, {Component} from 'react'

interface IProps {
    data?: any;
}

interface IState {

}

export default class Table extends Component<IProps, IState> {
    render() {
        return (
            <table className="min-w-full text-sm text-white">
                  <thead className='border-b-2 border-[#d14836]/10 border-rounded'>
                    <tr>
                      <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                        <div className="flex items-center uppercase">
                          Name
                        </div>
                      </th>
                      <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                        <div className="flex items-center uppercase">
                          Status
                        </div>
                      </th>
                      <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                        <div className="flex items-center uppercase">
                          Match Count
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="">
                    <tr>
                      <td className="p-4 font-medium whitespace-nowrap">Jane Doe</td>
                      <td className="p-4 whitespace-nowrap">
                        <strong
                          className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium"
                        >
                          Winner
                        </strong>
                      </td>
                      <td className="p-4  whitespace-nowrap">42</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium whitespace-nowrap">Jane Doe</td>
                      <td className="p-4 whitespace-nowrap">
                        <strong
                          className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium"
                        >
                          Looser
                        </strong>
                      </td>
                      <td className="p-4 whitespace-nowrap font-bold">64</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium whitespace-nowrap">Jane Doe</td>
                      <td className="p-4 whitespace-nowrap">
                        <strong
                          className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium"
                        >
                          Looser
                        </strong>
                      </td>
                      <td className="p-4 whitespace-nowrap font-bold">64</td>
                    </tr>
                  </tbody>
                </table>
        )
    }
}
