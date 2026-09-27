import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { WEEKLY_DIET_PLAN } from '../../data/initialData';
import { 
  Utensils, 
  Apple, 
  Flame, 
  Droplets, 
  Info, 
  Sparkles, 
  Check, 
  Heart, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ChevronRight,
  Sun,
  Coffee,
  Sunset,
  Moon,
  ShieldCheck
} from 'lucide-react';

export const NutritionScreen = () => {
  const { currentKid } = useApp();
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedMealFilter, setSelectedMealFilter] = useState('ALL'); // 'ALL' | 'Early Morning' | 'Breakfast' | 'Lunch' | 'Dinner'
  const [waterGlasses, setWaterGlasses] = useState(4);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const currentDayMeals = WEEKLY_DIET_PLAN[selectedDay] || WEEKLY_DIET_PLAN['Monday'];

  const filteredMeals = selectedMealFilter === 'ALL' 
    ? currentDayMeals 
    : currentDayMeals.filter(m => m.mealType === selectedMealFilter);

  const totalCalories = currentDayMeals.reduce((acc, m) => acc + parseInt(m.calories), 0);
  const totalProtein = currentDayMeals.reduce((acc, m) => acc + parseInt(m.protein), 0);
  const totalCarbs = currentDayMeals.reduce((acc, m) => acc + parseInt(m.carbs), 0);
  const totalFats = currentDayMeals.reduce((acc, m) => acc + parseInt(m.fats), 0);

  const getMealTypeIcon = (type) => {
    switch(type) {
      case 'Early Morning': return <Sun size={18} color="#F7931E" />;
      case 'Breakfast': return <Coffee size={18} color="#056DB4" />;
      case 'Lunch': return <Utensils size={18} color="#53BF9D" />;
      case 'Dinner': return <Moon size={18} color="#7622C9" />;
      default: return <Utensils size={18} color="#056DB4" />;
    }
  };

  const getMealHeaderColor = (type) => {
    switch(type) {
      case 'Early Morning': return 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)';
      case 'Breakfast': return 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)';
      case 'Lunch': return 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)';
      case 'Dinner': return 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)';
      default: return '#F8FAFC';
    }
  };

  return (
    <div className="screen-scroll-container">
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #056DB4 0%, #012741 100%)',
        padding: '20px 18px 22px',
        color: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Weekly Pediatric Diet Plan</h2>
              <span style={{ 
                background: '#53BF9D', 
                color: '#FFFFFF', 
                fontSize: '10.5px', 
                fontWeight: '800', 
                padding: '2px 8px', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <CheckCircle2 size={12} /> Published
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}>
              Curated by Dr. Ila B for {currentKid.name} ({currentKid.age})
            </p>
          </div>

          <img 
            src={currentKid.avatar || '/assets/kid1_1.png'} 
            alt={currentKid.name}
            style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #53BF9D', objectFit: 'cover' }}
          />
        </div>

        {/* 7-Day Complete Week Horizontal Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none'
        }}>
          {weekdays.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: isSelected ? '800' : '600',
                  border: isSelected ? '1.5px solid #53BF9D' : 'none',
                  background: isSelected ? '#FFFFFF' : 'rgba(255,255,255,0.18)',
                  color: isSelected ? '#056DB4' : '#FFFFFF',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '16px 18px 40px' }}>
        {/* Published Day Overview Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#056DB4', textTransform: 'uppercase' }}>
                {selectedDay}'s Prescribed Schedule
              </span>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#012741' }}>
                4 Published Daily Meals
              </h4>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '11px', color: '#64748B' }}>Daily Energy Target</span>
              <p style={{ fontSize: '15px', fontWeight: '800', color: '#F7931E', margin: 0 }}>
                {totalCalories} kcal
              </p>
            </div>
          </div>

          {/* Daily Macros Pill Breakdown */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', textAlign: 'center' }}>
            <div style={{ background: '#FEF3C7', padding: '8px 4px', borderRadius: '12px' }}>
              <span style={{ fontSize: '10px', color: '#92400E', fontWeight: '700' }}>Calories</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#B45309', margin: '2px 0 0' }}>{totalCalories} kcal</p>
            </div>
            <div style={{ background: '#E0F2FE', padding: '8px 4px', borderRadius: '12px' }}>
              <span style={{ fontSize: '10px', color: '#0369A1', fontWeight: '700' }}>Protein</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#0284C7', margin: '2px 0 0' }}>{totalProtein}g</p>
            </div>
            <div style={{ background: '#ECFDF5', padding: '8px 4px', borderRadius: '12px' }}>
              <span style={{ fontSize: '10px', color: '#047857', fontWeight: '700' }}>Carbs</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#059669', margin: '2px 0 0' }}>{totalCarbs}g</p>
            </div>
            <div style={{ background: '#F5F3FF', padding: '8px 4px', borderRadius: '12px' }}>
              <span style={{ fontSize: '10px', color: '#6D28D9', fontWeight: '700' }}>Fats</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#7C3AED', margin: '2px 0 0' }}>{totalFats}g</p>
            </div>
          </div>
        </div>

        {/* Meal Time Segment Filter */}
        <div style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          marginBottom: '14px',
          paddingBottom: '2px'
        }}>
          {['ALL', 'Early Morning', 'Breakfast', 'Lunch', 'Dinner'].map((slot) => {
            const isSelected = selectedMealFilter === slot;
            return (
              <button
                key={slot}
                onClick={() => setSelectedMealFilter(slot)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '11px',
                  fontWeight: isSelected ? '800' : '600',
                  border: isSelected ? '1px solid #056DB4' : '1px solid #E2E8F0',
                  background: isSelected ? '#056DB4' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#64748B',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {slot === 'ALL' ? 'All 4 Meals' : slot}
              </button>
            );
          })}
        </div>

        {/* 4 Published Meal Cards Stream */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredMeals.map((meal, index) => {
            return (
              <div
                key={meal.id || index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  overflow: 'hidden'
                }}
              >
                {/* Meal Header Banner */}
                <div style={{
                  padding: '12px 16px',
                  background: getMealHeaderColor(meal.mealType),
                  borderBottom: '1px solid #EEF2F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {getMealTypeIcon(meal.mealType)}
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: '800', color: '#012741' }}>
                        {meal.mealType}
                      </span>
                      <span style={{ fontSize: '11px', color: '#64748B', marginLeft: '6px' }}>
                        ({meal.timeSlot})
                      </span>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: '700',
                    background: '#53BF9D',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: '8px'
                  }}>
                    Verified Diet
                  </span>
                </div>

                {/* Meal Details Body */}
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <img 
                      src={meal.image || '/assets/rice_bowl_1.png'} 
                      alt={meal.title}
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '14px',
                        objectFit: 'cover',
                        border: '1px solid #E2E8F0',
                        flexShrink: 0
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: '#012741', lineHeight: 1.25 }}>
                        {meal.title}
                      </h4>
                      <p style={{ fontSize: '11.5px', color: '#64748B', marginTop: '3px' }}>
                        {meal.subtitle}
                      </p>
                      
                      <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: '#F7931E' }}>
                          🔥 {meal.calories}
                        </span>
                        <span style={{ fontSize: '11px', color: '#64748B' }}>
                          • P: <strong style={{ color: '#056DB4' }}>{meal.protein}</strong>
                        </span>
                        <span style={{ fontSize: '11px', color: '#64748B' }}>
                          • C: <strong style={{ color: '#056DB4' }}>{meal.carbs}</strong>
                        </span>
                        <span style={{ fontSize: '11px', color: '#64748B' }}>
                          • F: <strong style={{ color: '#056DB4' }}>{meal.fats}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Published Food Items & Exact Quantities List (matches Android feed.mealData) */}
                  <div style={{
                    background: '#FAF9F7',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    marginBottom: '10px',
                    border: '1px solid #F1F5F9'
                  }}>
                    <strong style={{ fontSize: '11px', color: '#012741', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block', marginBottom: '6px' }}>
                      Prescribed Food Items & Portions
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {meal.foodItems.map((fi, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                          <span style={{ color: '#334155' }}>• {fi.item}</span>
                          <strong style={{ color: '#056DB4' }}>{fi.quantity} {fi.unit}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pediatric Benefit & Preparation Tip */}
                  <div style={{
                    background: '#EFF6FF',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    fontSize: '11px',
                    color: '#1E40AF',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}>
                    <p style={{ margin: 0 }}>
                      <strong>Dr. Ila's Note:</strong> {meal.benefits}
                    </p>
                    <p style={{ margin: 0, color: '#3B82F6' }}>
                      <em>Tip: {meal.tips}</em>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Meal Preferences & Allergy Security Card (Expandable like Android ExpandableCard) */}
        <div style={{
          marginTop: '16px',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}>
          <div 
            onClick={() => setIsPreferencesOpen(!isPreferencesOpen)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Apple size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#012741' }}>Meal Preferences & Safety</h4>
                <p style={{ fontSize: '11px', color: '#64748B' }}>Verified pediatric food rules</p>
              </div>
            </div>

            <ChevronRight 
              size={18} 
              color="#94A3B8" 
              style={{ transform: isPreferencesOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} 
            />
          </div>

          {isPreferencesOpen && (
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', background: '#F8FAFC', borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ color: '#64748B' }}>Diet Type:</span>
                <strong style={{ color: '#16A34A' }}>🌱 Eggetarian / Lacto-Vegetarian</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', background: '#F8FAFC', borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ color: '#64748B' }}>Child Likes:</span>
                <strong style={{ color: '#056DB4' }}>Banana Puree, Moong Dal Khichdi, Ragi Kheer</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', background: '#F8FAFC', borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ color: '#64748B' }}>Dislikes / Avoided:</span>
                <strong style={{ color: '#D97706' }}>Raw Bittergourd, Unmashed Whole Nuts</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', background: '#FEF2F2', borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ color: '#DC2626' }}>Allergies Checked:</span>
                <strong style={{ color: '#DC2626' }}>{currentKid.allergies?.join(', ') || 'No severe allergies'} (Auto Filtered)</strong>
              </div>
            </div>
          )}
        </div>

        {/* Hydration Tracker */}
        <div style={{
          marginTop: '16px',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplets size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#012741' }}>Daily Fluid Hydration</h4>
              <p style={{ fontSize: '11px', color: '#64748B' }}>Target: 5-6 glasses fluids</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
              style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #CBD5E1', background: '#FFFFFF', fontWeight: '800', cursor: 'pointer' }}
            >
              -
            </button>
            <span style={{ fontSize: '14px', fontWeight: '800', color: '#0284C7', minWidth: '24px', textAlign: 'center' }}>
              {waterGlasses}
            </span>
            <button
              onClick={() => setWaterGlasses(Math.min(10, waterGlasses + 1))}
              style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', background: '#0284C7', color: '#FFFFFF', fontWeight: '800', cursor: 'pointer' }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
