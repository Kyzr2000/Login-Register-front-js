import React from "react";
import { nanoid } from "nanoid";
import { useRecoilValue } from "recoil";
import { userState } from "../../states/user";
export default function Show() {
  const userList = useRecoilValue(userState);
  return (
    <div className="kyzr_show">
      <div className="kyzr_showContent">
        <h2>展示注册信息</h2>
        <div className="kyzr_table">
          <table className="kyzr_tableContent">
            <tbody>
              <tr>
                <th>Email</th>
                <th>Gender</th>
                <th>Nickname</th>
                <th>Phone</th>
              </tr>

              {userList.map((user) => {
                return (
                  <tr key={nanoid()}>
                    <td>{user.email}</td>
                    <td>{user.gender === "male" ? "男" : "女"}</td>
                    <td>{user.nickname}</td>
                    <td>
                      +{user.prefix}&nbsp;{user.phone}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
