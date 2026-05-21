import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  certifications = [
    {
      name: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      description: 'Proficiency in SQL queries, joins, aggregations, and data manipulation',
      downloadUrl: 'https://drive.google.com/file/d/18ue0uPN1Fc5O8sZMtOcQID57xi7ZefIl/view'
    },
    {
      name: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      description: 'Demonstrated proficiency in fundamental algorithms and data structures',
      downloadUrl: 'https://drive.google.com/file/d/1Y7IHCt5Wa4l-NwBzkjj4G7hFVAj-DUOL/view'
    }
  ];

  platforms = [
    { name: 'Codeforces', link: 'https://codeforces.com/profile/Crypt0_Falcon' },
    { name: 'AtCoder', link: 'https://atcoder.jp/users/mh_no_way' },
    { name: 'LeetCode', link: 'https://leetcode.com/u/mh_no_way/' },
    { name: 'Vjudge', link: 'https://vjudge.net/user/Mridul1005' },
    { name: 'CodeChef', link: 'https://www.codechef.com/users/mh_no_way' },
    { name: 'HackerRank', link: 'https://www.hackerrank.com/profile/mhdanger193' },
    { name: 'CSES', link: 'https://cses.fi/user/348394' }
  ];
}