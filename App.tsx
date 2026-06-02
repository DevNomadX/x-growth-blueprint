import { useState } from "react";

const data = {
  phases: [
    {
      id: 1,
      name: "FOUNDATION",
      days: "1–7",
      color: "#00d4ff",
      accent: "#003344",
      icon: "⚡",
      tagline: "Build the machine before you run it",
      overview: "Your profile is your storefront. Nobody buys from a dusty shop. Week 1 is about making sure your first impression doesn't kill your last chance.",
      tips: [
        "Profile photo: real face, good lighting, no sunglasses — humans trust humans",
        "Bio: WHO you are + WHAT you tweet about + ONE personality hook. Max 160 chars.",
        "Header image: make it say something. A quote, a vibe, a niche visual.",
        "Pinned tweet: your best take or most useful thread. Update it weekly.",
        "Username: keep it clean, memorable, no underscores if possible",
        "Link in bio: even if it's just your portfolio or a Linktree",
      ],
      dailyTasks: [
        { day: 1, task: "Audit & rewrite bio, update profile + header photo" },
        { day: 2, task: "Follow 20 accounts in your niche (big + mid + small)" },
        { day: 3, task: "Write and pin your best tweet or a short intro thread" },
        { day: 4, task: "Reply 10x to big accounts in your niche — add VALUE, not 'great post!'" },
        { day: 5, task: "Post your first original tweet with an opinion or insight" },
        { day: 6, task: "Engage with 5 smaller creators — they will actually notice you" },
        { day: 7, task: "Review analytics: which of your early tweets got any traction?" },
      ],
      metric: "Goal: 10–30 new followers",
    },
    {
      id: 2,
      name: "CONTENT ENGINE",
      days: "8–14",
      color: "#ff6b35",
      accent: "#330e00",
      icon: "🔥",
      tagline: "Consistency beats genius. Always.",
      overview: "Week 2 is where most people quit. Don't. This is when the algorithm starts learning who you are. Feed it consistently.",
      tips: [
        "Post 1–3 times per day — quality over quantity but stay consistent",
        "Best times: 7–9am, 12–1pm, 6–9pm (your audience's timezone)",
        "Use hooks: start every tweet with a line that earns the next line",
        "Ratio rule: 70% value/insight, 20% personal, 10% promotional",
        "Threads > single tweets for reach — but don't pad them with fluff",
        "Ask questions — they invite replies which signal engagement to the algorithm",
      ],
      dailyTasks: [
        { day: 8, task: "Write a 5-tweet thread on something you genuinely know well" },
        { day: 9, task: "Post one hot take or contrarian opinion in your niche" },
        { day: 10, task: "Reply 15x to trending posts in your topic area" },
        { day: 11, task: "Quote tweet a big account with your original insight added" },
        { day: 12, task: "Post a 'What I learned from X' style tweet — practical + personal" },
        { day: 13, task: "Engage deeply with 3 people who replied to your tweets this week" },
        { day: 14, task: "Mini review: screenshot your best-performing tweet and study its hook" },
      ],
      metric: "Goal: 50–100 new followers",
    },
    {
      id: 3,
      name: "AMPLIFICATION",
      days: "15–21",
      color: "#a855f7",
      accent: "#1a0033",
      icon: "📡",
      tagline: "Stop talking to the void. Start talking to people.",
      overview: "Week 3 is about strategic visibility. You have content, you have a profile — now you need to get in front of eyeballs that matter.",
      tips: [
        "Find 5 'engagement pods' or niche communities (Discord, private Twitter groups)",
        "Comment on viral tweets EARLY — first 30 mins after posting = massive exposure",
        "Tag relevant accounts only when you genuinely add to the conversation",
        "Repost your own top tweets from 2 weeks ago — new followers haven't seen them",
        "Use lists to monitor top creators and never miss their posts",
        "Collaborate: ask someone in your niche to do a tweet swap or a shared thread",
      ],
      dailyTasks: [
        { day: 15, task: "Identify 3 fast-rising accounts in your niche, engage daily with them" },
        { day: 16, task: "Repost your best tweet from Week 1 with a small edit or update" },
        { day: 17, task: "Write a thread that references or expands on a viral tweet" },
        { day: 18, task: "DM 3 people whose work you genuinely admire — no ask, just appreciation" },
        { day: 19, task: "Post a poll — they're underused and get easy engagement" },
        { day: 20, task: "Create a 'resource list' tweet — people save and share these" },
        { day: 21, task: "Hit the first 100 follower mark if not there yet — celebrate anyway" },
      ],
      metric: "Goal: 100–200 total followers",
    },
    {
      id: 4,
      name: "AUTHORITY",
      days: "22–30",
      color: "#22c55e",
      accent: "#002210",
      icon: "👑",
      tagline: "Be the person worth following, not just the person who posts.",
      overview: "Final stretch. You're not just building an audience — you're building a reputation. Every tweet is a brick. What are you building?",
      tips: [
        "Niche down further: be THE person for something specific, not 'everything'",
        "Testimonials/social proof: screenshot kind DMs or replies and share them",
        "Document your journey — '30 days of X' content resonates massively",
        "Create a signature format: e.g. 'Monday Insights', 'Weekly Thread', your own style",
        "Give away your best stuff for free — scarcity is a myth on Twitter",
        "Build email list or other owned channel — never depend 100% on any platform",
      ],
      dailyTasks: [
        { day: 22, task: "Write your most ambitious thread yet — something you're genuinely proud of" },
        { day: 23, task: "Create a tweet that summarizes your niche expertise in 5 bullets" },
        { day: 24, task: "Respond to every single reply you get today — show up for your people" },
        { day: 25, task: "Post a 'lessons learned in 30 days of tweeting' preview thread" },
        { day: 26, task: "Collaborate: quote thread or response chain with someone in your niche" },
        { day: 27, task: "Share something personal/vulnerable — audiences follow humans, not brands" },
        { day: 28, task: "Post your most polished, thought-through thread of the month" },
        { day: 29, task: "Audit: what content style got the most engagement? Double down." },
        { day: 30, task: "Celebrate publicly — post your 30-day journey recap. This itself will go viral." },
      ],
      metric: "Goal: 200–500 total followers",
    },
  ],
  bonusTips: [
    { icon: "🧵", title: "Thread formula", tip: "Hook → Problem → Insight 1 → Insight 2 → Insight 3 → Actionable takeaway → CTA. Never open with 'In this thread...' — that's the kiss of death." },
    { icon: "🚫", title: "What NOT to do", tip: "Don't beg for follows. Don't post and ghost. Don't only retweet others. Don't use hashtag spam (3+ hashtags = cringe). Don't argue in replies." },
    { icon: "⏰", title: "Scheduling without premium", tip: "Use Hypefury free tier, Buffer free plan, or TweetDeck (free). Schedule 3–5 days ahead so you're never scrambling." },
    { icon: "📊", title: "Track without analytics premium", tip: "Screenshot your metrics every Sunday manually. Note: impressions, likes, replies, profile visits. Patterns emerge in 2 weeks." },
    { icon: "🎯", title: "The algorithm secret", tip: "Replies weigh MORE than likes. Bookmarks weigh MORE than retweets. Write tweets that make people reply or save — not just double-tap." },
    { icon: "🔄", title: "Content recycling", tip: "Your best tweet can become a thread. That thread becomes a carousel on LinkedIn. That carousel becomes a newsletter. One idea, five pieces of content." },
  ],
};

export default function TwitterBlueprint() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedDay, setExpandedDay] = useState(null);
  const [completedDays, setCompletedDays] = useState(new Set());

  const phase = data.phases[activePhase];

  const toggleDay = (day) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080c10",
      fontFamily: "'Courier New', monospace",
      color: "#e8edf2",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #080c10 0%, #0d1b2a 50%, #080c10 100%)",
        borderBottom: "1px solid #1a2535",
        padding: "40px 24px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          fontSize: "11px", letterSpacing: "4px", color: "#00d4ff",
          textTransform: "uppercase", marginBottom: "12px", opacity: 0.8,
        }}>
          Free. No Premium. No Excuses.
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: "900",
          margin: "0 0 8px",
          letterSpacing: "-1px",
          lineHeight: 1.1,
          fontFamily: "'Georgia', serif",
        }}>
          30-Day X Growth<br />
          <span style={{ color: "#00d4ff" }}>Blueprint</span>
        </h1>
        <p style={{
          color: "#8899aa", fontSize: "14px", margin: "16px 0 0",
          maxWidth: "480px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6,
        }}>
          From zero to voice. A no-fluff, daily-action system for building real Twitter presence — organically.
        </p>
        <div style={{
          display: "flex", justifyContent: "center", gap: "24px",
          marginTop: "28px", flexWrap: "wrap",
        }}>
          {[["30", "Days"], ["0$", "Cost"], ["4", "Phases"], ["∞", "Potential"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "#00d4ff", fontFamily: "'Georgia', serif" }}>{val}</div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#556677", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Nav */}
      <div style={{
        display: "flex", gap: "4px", padding: "20px 20px 0",
        overflowX: "auto", justifyContent: "center", flexWrap: "wrap",
      }}>
        {data.phases.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(i)}
            style={{
              background: activePhase === i ? p.color : "transparent",
              border: `1px solid ${activePhase === i ? p.color : "#1e2d3d"}`,
              color: activePhase === i ? "#000" : "#8899aa",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "11px",
              letterSpacing: "2px",
              fontWeight: "700",
              textTransform: "uppercase",
              transition: "all 0.2s",
              fontFamily: "'Courier New', monospace",
              whiteSpace: "nowrap",
            }}
          >
            {p.icon} WEEK {p.id}: {p.name}
          </button>
        ))}
      </div>

      {/* Phase Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "28px 20px" }}>
        {/* Phase Header */}
        <div style={{
          border: `1px solid ${phase.color}22`,
          borderLeft: `3px solid ${phase.color}`,
          background: `linear-gradient(135deg, ${phase.color}08, transparent)`,
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "28px" }}>{phase.icon}</span>
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: phase.color, textTransform: "uppercase" }}>
                Days {phase.days}
              </div>
              <div style={{ fontSize: "22px", fontWeight: "900", fontFamily: "'Georgia', serif" }}>
                Phase {phase.id}: {phase.name}
              </div>
            </div>
          </div>
          <div style={{ color: phase.color, fontSize: "13px", fontStyle: "italic", marginBottom: "10px" }}>
            "{phase.tagline}"
          </div>
          <p style={{ color: "#aabbcc", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
            {phase.overview}
          </p>
          <div style={{
            marginTop: "16px", background: `${phase.color}15`,
            borderRadius: "6px", padding: "10px 14px",
            display: "inline-block", fontSize: "12px",
            color: phase.color, letterSpacing: "1px",
          }}>
            🎯 {phase.metric}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {/* Tips */}
          <div style={{
            border: "1px solid #1a2535",
            borderRadius: "8px",
            padding: "20px",
            background: "#0a1018",
          }}>
            <div style={{
              fontSize: "10px", letterSpacing: "3px", color: "#556677",
              textTransform: "uppercase", marginBottom: "16px",
            }}>
              ▸ WEEK TIPS
            </div>
            {phase.tips.map((tip, i) => (
              <div key={i} style={{
                display: "flex", gap: "10px", marginBottom: "12px",
                alignItems: "flex-start",
              }}>
                <span style={{ color: phase.color, fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>◆</span>
                <span style={{ color: "#99aabb", fontSize: "12px", lineHeight: 1.6 }}>{tip}</span>
              </div>
            ))}
          </div>

          {/* Daily Tasks */}
          <div style={{
            border: "1px solid #1a2535",
            borderRadius: "8px",
            padding: "20px",
            background: "#0a1018",
          }}>
            <div style={{
              fontSize: "10px", letterSpacing: "3px", color: "#556677",
              textTransform: "uppercase", marginBottom: "16px",
            }}>
              ▸ DAILY ACTIONS
            </div>
            {phase.dailyTasks.map((item) => (
              <div
                key={item.day}
                onClick={() => toggleDay(item.day)}
                style={{
                  display: "flex", gap: "10px", marginBottom: "10px",
                  alignItems: "flex-start", cursor: "pointer",
                  opacity: completedDays.has(item.day) ? 0.45 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                <div style={{
                  width: "20px", height: "20px", borderRadius: "3px",
                  border: `1px solid ${completedDays.has(item.day) ? phase.color : "#2a3a4a"}`,
                  background: completedDays.has(item.day) ? phase.color : "transparent",
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "10px", color: "#000", fontWeight: "900",
                  transition: "all 0.2s",
                }}>
                  {completedDays.has(item.day) ? "✓" : ""}
                </div>
                <div>
                  <span style={{
                    fontSize: "10px", color: phase.color,
                    letterSpacing: "1px", marginRight: "6px",
                  }}>
                    D{item.day}
                  </span>
                  <span style={{
                    color: completedDays.has(item.day) ? "#445566" : "#ccd6e0",
                    fontSize: "12px", lineHeight: 1.5,
                    textDecoration: completedDays.has(item.day) ? "line-through" : "none",
                  }}>
                    {item.task}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: "20px" }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            fontSize: "10px", color: "#445566", letterSpacing: "2px",
            textTransform: "uppercase", marginBottom: "8px",
          }}>
            <span>Progress</span>
            <span>{completedDays.size} / 30 days completed</span>
          </div>
          <div style={{
            height: "4px", background: "#111820", borderRadius: "2px",
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${(completedDays.size / 30) * 100}%`,
              background: `linear-gradient(90deg, #00d4ff, #a855f7)`,
              borderRadius: "2px",
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>
      </div>

      {/* Bonus Tips */}
      <div style={{
        maxWidth: "860px", margin: "0 auto", padding: "0 20px 48px",
      }}>
        <div style={{
          fontSize: "10px", letterSpacing: "4px", color: "#556677",
          textTransform: "uppercase", marginBottom: "20px", textAlign: "center",
        }}>
          ── Bonus Arsenal ──
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "14px",
        }}>
          {data.bonusTips.map((b, i) => (
            <div key={i} style={{
              border: "1px solid #1a2535",
              borderRadius: "8px",
              padding: "18px",
              background: "#0a1018",
            }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontSize: "20px" }}>{b.icon}</span>
                <span style={{
                  fontSize: "11px", fontWeight: "700", letterSpacing: "2px",
                  textTransform: "uppercase", color: "#ccd6e0",
                }}>
                  {b.title}
                </span>
              </div>
              <p style={{ color: "#7a8fa0", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                {b.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "40px",
          borderTop: "1px solid #1a2535",
          paddingTop: "28px",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: "11px", letterSpacing: "2px", color: "#334455",
            textTransform: "uppercase", marginBottom: "12px",
          }}>
            The Honest Truth
          </div>
          <p style={{
            color: "#445566", fontSize: "13px", lineHeight: 1.8,
            maxWidth: "520px", margin: "0 auto",
          }}>
            Most people post for 3 days and quit. The ones who win are just the ones who don't stop. 
            You don't need Premium. You don't need a viral moment. 
            You need to show up — with a point of view — every single day.
          </p>
          <div style={{ marginTop: "20px", color: "#00d4ff", fontSize: "18px", letterSpacing: "4px" }}>
            · · ·
          </div>
        </div>
      </div>
    </div>
  );
}
