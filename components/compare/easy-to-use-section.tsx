import WorkflowManagementImg from "../homepage/sections/workflow-management.png";
import SupportTemplatesImg from "../homepage/sections/support-templates.png";
import Image from "next/image";
import styles from './compare.module.scss';

export function EasyToUseSection() {
  return (
    <div className={styles.sections}>
      <div className={styles.section} style={{ marginTop: "140px" }}>
        <h2>Easy to <span className={styles.colorText}>use</span> and <span className={styles.colorText}>learn</span></h2>
        <p className={styles.description} style={{ margin: "24px auto 44px auto" }}>We've made numerous enhancements to our product to lower the barriers to entry for everyone. Additionally, we provide comprehensive tutorials for learning and guidance.</p>
      </div>

      <div className={styles.flexbox}>
        <WorkflowManagement />
        <SupportsTemplates />
      </div>

    </div>
  )
}

export function WorkflowManagement() {
  return (
    <div className={styles.sectionBlock}>
      <h3>Workflow Management</h3>
      <p className={styles.cardDescription}>Manage your Workflow more conveniently, and every change you make will be automatically saved, so you no longer need to manually export and save your workflow.</p>
      <Image src={WorkflowManagementImg.src} width={300} height={100} alt="workflow management" style={{ margin: "60px 0px 80px 40px", transform: "scale(1.8)" }} />
    </div>
  )
}

export function SupportsTemplates() {
  return (
    <div className={styles.sectionBlock} style={{ backgroundColor: "transparent" }}>
      <GradientBg />
      <h3>Supports Templates</h3>
      <p className={styles.cardDescription}>Setting up a workflow is tedious? The product supports one-click use of templates, eliminating the hassle of building workflows.</p>
      <Image src={SupportTemplatesImg.src} width={300} height={1024} alt="workflow management" style={{ margin: "20px 0px 20px 40px", transform: "scale(1.2)" }} />
    </div>
  )
}

function GradientBg() {
  return (
    <div className={styles.gradientBg}>
      <svg width="260" height="300" viewBox="0 0 1347 648" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <rect opacity="0.5" x="293.147" y="237.404" width="876.705" height="173.263" rx="86.6316" stroke="url(#paint0_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.5" x="275.292" y="220.73" width="912.417" height="206.61" rx="103.305" stroke="url(#paint1_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.5" x="309.813" y="255.269" width="843.374" height="137.534" rx="68.7671" stroke="url(#paint2_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.4" x="216.312" y="167.809" width="1028.75" height="312.383" rx="156.191" stroke="url(#paint3_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.4" x="255.368" y="203.139" width="950.635" height="241.723" rx="120.862" stroke="url(#paint4_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.4" x="237.468" y="185.904" width="986.437" height="276.191" rx="138.096" stroke="url(#paint5_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.3" x="196.783" y="147.989" width="1069.43" height="352.021" rx="176.011" stroke="url(#paint6_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.3" x="174.001" y="132.479" width="1115" height="383.043" rx="191.521" stroke="url(#paint7_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.2" x="152.845" y="116.968" width="1157.31" height="414.064" rx="207.032" stroke="url(#paint8_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.1" x="104.023" y="80.7769" width="1254.95" height="486.447" rx="243.223" stroke="url(#paint9_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.1" x="131.689" y="102.319" width="1199.62" height="443.362" rx="221.681" stroke="url(#paint10_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.05" x="35.6748" y="38.5532" width="1391.65" height="570.894" rx="285.447" stroke="url(#paint11_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.05" x="73.1035" y="62.6812" width="1316.79" height="522.638" rx="261.319" stroke="url(#paint12_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.05" x="1.5" y="1.5" width="1460" height="645" rx="322.5" stroke="url(#paint13_radial_1237_15621)" strokeWidth="3" />
        </g>
        <defs>
          <radialGradient id="paint0_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324.036) rotate(90) scale(88.1316 439.852)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint1_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324.036) rotate(90) scale(104.805 457.708)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint2_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324.036) rotate(90) scale(70.2671 423.187)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint3_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(730.686 324.001) rotate(90) scale(157.691 515.874)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint4_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(730.686 324) rotate(90) scale(122.362 476.818)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint5_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(730.686 324) rotate(90) scale(139.596 494.719)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint6_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(177.511 536.216)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint7_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(193.021 558.999)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint8_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(208.532 580.155)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint9_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(244.723 628.976)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint10_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(223.181 601.311)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint11_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(286.947 697.325)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint12_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(262.819 659.896)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint13_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(324 731.5)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
        </defs>
      </svg>

    </div>
  )
}