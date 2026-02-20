"use client";

import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function MoreInfo() {
    const [open, setOpen] = useState(true); // ✅ open by default

    const content = `
      <h3>Everyday Protection. Everyday Performance.</h3>
      <p>Your body does not work in parts. Circulation, metabolism, immunity, and recovery constantly depend on each other. When one slows down, others follow.
</p>
<p>Extracard and Welfusion are designed as a coordinated daily system, not two separate products, helping the body maintain steady function throughout long days, irregular meals, and changing routines.</p>
<h2>Cardio Vascular Strength Begins with the Best Supplements for Heart Health</h2>
<p>Energy levels often depend on how efficiently oxygen and nutrients travel through the body. Stable circulation supports mental alertness, muscle activity, and daily stamina.
Extracard focuses on maintaining this efficiency by supporting vascular comfort and cellular nourishment. Regular intake helps the body adapt better to physical and mental effort, making it suitable for individuals looking for the best supplements for heart health as part of preventive care rather than corrective treatment.</p>
<h3>Daily Functional Support</h3>
<ul>
<li>Helps maintain circulation comfort during long sitting hours</li>
<li>Assists post-activity recovery</li>
<li>Supports consistent endurance during daily tasks</li>
<li>Encourages steady performance without sudden fatigue</li>

</ul>
<h2>Nutrient Utilization Matters More Than Intake</h2>
<p>Even a good diet may not supply micronutrients in consistent amounts. Cellular reactions require cofactors every day, not occasionally.
</p>
<p>Welfusion provides structured micronutrient coverage so the body can perform routine biological processes smoothly. This is why many users consider it among the best multivitamin tablets in India for maintaining daily physiological balance.</p>
<h3>Supports Everyday Biological Functions</h3>
<ul>

<li>Energy conversion from food</li>
<li>Nerve signaling and coordination</li>
<li>Tissue maintenance</li>
<li>Metabolic steadiness</li>
</ul>
<h2>Fatty Acid Balance with the Best Omega 3 Supplement in India
</h2>
<p>Healthy fats contribute to membrane integrity, nerve communication, and circulatory comfort. Maintaining the right profile helps the body function steadily during both activity and rest.</p>
<p>Extracard includes targeted fatty acid nutrition for people searching for the best omega 3 supplement in India that fits into a long-term routine rather than short cycles.
</p>
<h2>Why Use Them Together?</h2>
<p>Nutrition works best when transport and utilization happen together.</p>
<ul>
<li><b>Extracard</b> supports how nutrients move through the body</li>
<li><b>Welfusion </b> supports how cells process those nutrients
</li>

</ul>
<p>The result is a more stable internal environment across workdays, travel, exercise, and recovery periods.</p>
<h2>Who May Benefit?
</h2>
<ul>

<li>Professionals with irregular schedules</li>
<li>Adults above 30 focusing on preventive wellness</li>
<li>People experiencing mid-day tiredness</li>
<li>Individuals building a daily nutrition habit</li>
<li>Anyone seeking balanced long-term support</li>

</ul>
<h2>Wellness Built Through Habit</h2>
<p>Health improves through regular support, not occasional correction.
  <br>
With continued use, Extracard and Welfusion help maintain functional balance across systems — combining cardiovascular nourishment, micronutrient coverage, and daily resilience in one dependable routine.
</p>
    `

    return (
        <section className="py-4 md:py-8">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="border-b border-gray-300 mb-3"></div>
                {/* Header */}
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-gray-800">
                        Know More
                    </h2>

                    <span className="text-gray-600">
                        {open ? (
                            <FiChevronUp size={22} />
                        ) : (
                            <FiChevronDown size={22} />
                        )}
                    </span>
                </button>

                {/* Divider */}
                <div className="border-b border-gray-300 mt-3"></div>

                {/* Content */}
                <div
                    className={`transition-all duration-500 overflow-hidden ${open ? "max-h-full opacity-100 mt-6" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="text-[#505050] product_description">
                        <div className="
   [&_h1]:text-2xl md:[&_h1]:text-3xl [&_h1]:font-medium [&_h1]:mb-3
  [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-medium [&_h2]:mb-3 [&_h2]:mt-4
  [&_h3]:text-lg md:[&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-3 [&_h3]:mt-4
  [&_h4]:text-base md:[&_h4]:text-lg [&_h4]:font-medium [&_h4]:mb-3 [&_h4]:mt-4
  [&_h5]:text-[15px] md:[&_h5]:text-base [&_h5]:font-medium [&_h5]:mb-3 [&_h5]:mt-4
  [&_h6]:text-[15px] md:[&_h6]:text-base [&_h6]:font-medium [&_h6]:mb-3 [&_h6]:mt-4

  [&_p]:text-sm md:[&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:mb-2
  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 md:[&_ul]:text-[15px] [&_ul]:text-sm
  [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 md:[&_ol]:text-[15px] [&_ol]:text-sm [&_ul]:leading-relaxed
  [&_li]:mb-1 [&_li]:leading-relaxed
">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}