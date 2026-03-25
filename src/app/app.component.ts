import { Component } from '@angular/core';

interface Project {
  name: string;
  summary: string;
  tag: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly name = 'Theodor Chichirita';
  readonly role = 'Senior Software Engineer';
  readonly location = 'Building cloud-first products with a focus on scale, quality, and craft.';

  readonly highlights: string[] = [
    'End-to-end product engineering',
    'Cloud architecture and modernization',
    'High-transaction system performance',
    'DevSecOps and platform reliability'
  ];

  readonly projects: Project[] = [
    {
      name: 'Enterprise Product Platforms',
      summary: 'Shipped mission-critical product experiences across cross-functional teams.',
      tag: 'Product'
    },
    {
      name: 'Cloud-Native Architecture',
      summary: 'Designed scalable, secure, and maintainable systems for long-term growth.',
      tag: 'Cloud'
    },
    {
      name: 'Performance Engineering',
      summary: 'Improved throughput and UX quality in heavy-traffic environments.',
      tag: 'Performance'
    }
  ];

  readonly links = {
    linkedin: 'https://www.linkedin.com/in/theodor-chichirita-78770b140/',
    github: 'https://github.com/estatheo',
    blog: 'https://medium.com/@theodor.chichirita',
    email: 'mailto:theodor.chichirita@gmail.com?subject=Hello%20Theodor'
  };
}
