import { SIGILIST } from "./WizardTypes";
import { LINE_OF_SIGHT } from "./SpellCategories";

export const PUSH = 'Push';

export default {
  [PUSH]: {
    name: 'Push',
    school: SIGILIST,
    castingNumber: 8,
    category: LINE_OF_SIGHT,
    description: 'The target suffers an immediate +10 attack. Instead of taking damage from this attack, the target is moved 1” directly away from the spellcaster for every point of damage they would have taken. If this pushes the target into the edge of the table or a piece of terrain over 1⁄2” high, they stop immediately. Other figures do not stop (or get hit by) a pushed figure – they are assumed to step out of the way. If this spell is cast from beneath a figure it will push them up. If the target is pushed up or off a height, it suffers falling damage as normal. This spell can push a figure out of combat, and as it is not a shooting attack, the target is not randomized.'
  }
};

// Chronomancer Elementalist 
// Crumble Call Storm 
// Decay Destructive Sphere 
// Fast Act Elemental Ball 
// Fleet Feet Elemental Bolt 
// Petrify Elemental Hammer 
// Slow Elemental Shield 
// Time Store Scatter Shot 
// Time Walk Wall 

// Enchanter Illusionist 
// Animate Construct Blink 
// Control Construct Beauty 
// Embed Enchantment Fool’s Gold 
// Enchant Armour Glow 
// Enchant Weapon Illusionary Soldier 
// Grenade Invisibility 
// Strength Teleport 
// Telekinesis Transpose 

// Necromancer Sigilist 
// Animate Skull Absorb Knowledge 
// Bone Dart Bridge 
// Bones of the Earth Draining Word 
// Control Undead Explosive Rune 
// Raise Zombie Furious Quill 
// Spell Eater Power Word 
// Steal Health Push 
// Strike Dead Write Scroll 

// Soothsayer Summoner 
// Awareness Control Demon 
// Combat Awareness Imp 
// Mind Control Leap 
// Mind Lock Plague of Insects 
// Reveal Secret Planar Tear 
// Suggestion Plane Walk 
// True Sight Possess 
// Wizard Eye Summon Demon 

// Thaumaturge Witch 
// Banish Animal Companion 
// Blinding Light Brew Potion 
// Circle of Protection Control Animal 
// Destroy Undead Curse 
// Dispel Familiar 
// Heal Fog 
// Miraculous Cure Mud 
// Shield Poison Dart 