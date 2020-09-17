import { CHRONOMANCER, ELEMENTALIST, ENCHANTER, ILLUSIONIST, NECROMANCER, SIGILIST, SOOTHSAYER, SUMMONER, THAUMATURGE, WITCH } from "./WizardTypes";
import { AFTER_GAME, BEFORE_GAME, LINE_OF_SIGHT, SELF_ONLY, TOUCH, AREA_EFFECT } from "./SpellCategories";

export const ABSORB_KNOWLEDGE = 'Absorb knowledge';
export const ANIMAL_COMPANION = 'Animal companion';
export const ANIMATE_CONSTRUCT = 'Animate construct';
export const ANIMATE_SKULL = 'Animate skull';
export const AWARENESS = 'Awareness';
export const BANISH = 'Banish';
export const BEAUTY = 'Beauty';
export const BLINDING_LIGHT = 'Blinding light';
export const BLINK = 'Blink';
export const BONE_DART = 'Bone dart';
export const BREW_POTION = 'Brew potion';
export const BRIDGE = 'Bridge';
export const CALL_STORM = 'Call storm';
export const CIRCLE_OF_PROTECTION = 'Circle of protection';
export const COMBAT_AWARENESS = 'Combat awareness';
export const CONTROL_ANIMAL = 'Control animal';
export const CONTROL_CONSTRUCT = 'Control construct';
export const CONTROL_DEMON = 'Control demon';
export const CONTROL_UNDEAD = 'Control undead';
export const CRUMBLE = 'Crumble';
export const CURSE = 'Curse';
export const DECAY = 'Decay';
export const DESTROY_UNDEAD = 'Destroy undead';
export const DESTRUCTIVE_SPHERE = 'Destructive sphere';
export const DISPEL = 'Dispel';
export const DRAINING_WORD = 'Draining word';
export const ELEMENTAL_BALL = 'Elemental ball';
export const ELEMENTAL_BOLT = 'Elemental bolt';
export const ELEMENTAL_HAMMER = 'Elemental hammer';
export const ELEMENTAL_SHIELD = 'Elemental shield';
export const EMBED_ENCHANTMENT = 'Embed enchantment';
export const ENCHANT_ARMOUR = 'Enchant armour';
export const ENCHANT_WEAPON = 'Enchant weapon';
export const EXPLOSIVE_RUNE = 'Explosive rune';
export const FAMILIAR = 'Familiar';
export const FAST_ACT = 'Fast act';
export const FLEET_FEET = 'Fleet feet';
export const FOG = 'Fog';
export const FOOLS_GOLD = 'Fools gold';
export const FURIOUS_QUILL = 'Furious quill';
export const GLOW = 'Glow';
export const GRENADE = 'Grenade';
export const HEAL = 'Heal';
export const ILLUSIONARY_SOLDIER = 'Illusionary soldier';
export const IMP = 'Imp';
export const INVISIBILITY = 'Invisibility';
export const LEAP = 'Leap';
export const MIND_CONTROL = 'Mind control';
export const MIND_LOCK = 'Mind lock';
export const MIRACULOUS_CURE = 'Miraculous cure';
export const MUD = 'Mud';
export const PETRIFY = 'Petrify';
export const PLAGUE_OF_INSECTS = 'Plague of insects';
export const PLANAR_TEAR = 'Planar tear';
export const PLANEWALK = 'Planewalk';
export const POISION_DART = 'Poision dart';
export const POSSESS = 'Possess';
export const POWER_WORD = 'Power word';
export const PUSH = 'Push';
export const RAISE_ZOMBIE = 'Raise zombie';
export const REVEAL_SECRET = 'Reveal secret';
export const SCATTERSHOT = 'Scattershot';
export const SHIELD = 'Shield';
export const SLOW = 'Slow';
export const SPELLEATER = 'Spelleater';
export const STEAL_HEALTH = 'Steal health';
export const STRENGTH = 'Strength';
export const STRIKE_DEAD = 'Strike dead';
export const SUGGESTION = 'Suggestion';
export const SUMMON_DEMON = 'Summon demon';
export const TELEKINESIS = 'Telekinesis';
export const TELEPORT = 'Teleport';
export const TIME_STORE = 'Time store';
export const TIMEWALK = 'Timewalk';
export const TRANSPOSE = 'Transpose';
export const TRUESIGHT = 'Truesight';
export const WALL = 'Wall';
export const WIZARD_EYE = 'Wizard eye';
export const WRITE_SCROLL = 'Write scroll';

export default {
  [CRUMBLE]: {
    school: CHRONOMANCER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'This spell can only target inanimate structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Move Roll (TN22) or fall to the next level down and taking damage appropriately. If this spell is cast on a wall created by the Wall spell, the wall is completely destroyed. If it is cast on terrain holding a Wizard Eye, the Wizard Eye is cancelled.'
  },
  [PETRIFY]: {
    school: CHRONOMANCER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it receives no actions in its next activation. Furthermore, the figure suffers -3 Fight (to a minimum of +0) and may not have Leap cast upon it until after it makes its next move action. Large creatures receive +8 to their Will Roll to resist this spell.'
  },
  [FAST_ACT]: {
    school: CHRONOMANCER,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'This spell may only be cast on a member of the spellcaster’s warband or an uncontrolled creature. This figure will activate at the end of the current phase instead of in its normal phase. For example, if an apprentice casts this spell on an uncontrolled creature, the creature will activate at the end of that player’s Apprentice phase instead of the Creature phase. Spellcasters may not cast this spell on themselves, nor on a figure that has already activated in the current turn.'
  },
  [TIME_STORE]: {
    school: CHRONOMANCER,
    castingNumber: 14,
    category: [SELF_ONLY],
    description: 'The spellcaster captures a fragment of their own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during their activation. They must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored ‘extra action’ that they may use in a future turn. This action can only be used during the spellcaster’s activation and can give the spellcaster three actions in one activation.'
  },
  [DECAY]: {
    school: CHRONOMANCER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster selects and attacks a target’s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted). This spell has no effect on creatures (unless they are specifically identified as being equipped with a weapon from the General Arms and Armour List).'
  },
  [SLOW]: {
    school: CHRONOMANCER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target is reduced to a maximum of one action per activation (which can be any action, it does not have to be movement). It may make an Will Roll verses the Casting Roll at the end of each of its activations. If successful the spell is cancelled.'
  },
  [FLEET_FEET]: {
    school: CHRONOMANCER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target receives +2 Move for the rest of the game. Multiple castings of Fleet Feet on the same target have no effect.'
  },
  [TIMEWALK]: {
    school: CHRONOMANCER,
    castingNumber: 14,
    category: [SELF_ONLY],
    description: 'Wizard only. The wizard will activate again in the Apprentice phase and the Soldier phase. This is in addition to the figures that can normally activate in those phases. The wizard may not activate any additional soldiers or be part of a group activation in these phases. The wizard may perform one action in each of these two phases and may take any action – they are not limited to movement. If the wizard moved at all in a previous activation during the turn, any additional move actions are at half rate. If a wizard casts this spell in consecutive turns, they immediately suffer 8 points of damage.'
  },
  [CALL_STORM]: {
    school: ELEMENTALIST,
    castingNumber: 12,
    category: [AREA_EFFECT],
    description: 'All bow and crossbow attacks are made with -1 Shoot for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters), with each additional casting increasing the penalty by a further -1, up to a maximum of -5.'
  },
  [ELEMENTAL_HAMMER]: {
    school: ELEMENTALIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'This spell is cast upon a weapon. The next time the figure wielding this weapon wins a round of combat and does at least 1 point of damage, this weapon inflicts an additional 5 points of elemental magic damage. If cast on a normal weapon, which is then used against a creature that is Immune to Normal Weapons, this weapon will only deal the 5 points of elemental magic damage. If cast on a bow or crossbow the spell only applies to the next attack.'
  },
  [ELEMENTAL_BALL]: {
    school: ELEMENTALIST,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster selects an enemy figure within 16” and line of sight and hurls a ball of destructive elemental energy at it. The target and every figure within 1” and line of sight of the target immediately suffers a +5 elemental magic shooting attack. Roll this shooting attack separately for each figure. Treat the target figure as the origin of the attack for the purposes of determining cover or intervening terrain for all other figures suffering the attack. This spell may not target an enemy figure that is even partially obscured by another figure.'
  },
  [SCATTERSHOT]: {
    school: ELEMENTALIST,
    castingNumber: 12,
    category: [AREA_EFFECT],
    description: 'The spellcaster makes a +0 elemental magic shooting attack against every enemy figure (either from an opposing warband or uncontrolled creature) within 12” and line of sight. This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case.'
  },
  [DESTRUCTIVE_SPHERE]: {
    school: ELEMENTALIST,
    castingNumber: 12,
    category: [AREA_EFFECT],
    description: 'Every figure within 3” of the spellcaster (but not counting the spellcaster) suffers a +5 elemental magic attack.'
  },
  [ELEMENTAL_SHIELD]: {
    school: ELEMENTALIST,
    castingNumber: 10,
    category: [SELF_ONLY],
    description: 'The spellcaster forms a floating shield that absorbs the next 3 points of damage the spellcaster would normally suffer in combat or from a shooting attack. Once 3 points have been absorbed the spell is cancelled. A spellcaster may only have one Elemental Shield active at any time.'
  },
  [ELEMENTAL_BOLT]: {
    school: ELEMENTALIST,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster makes a +7 elemental magic shooting attack against a target figure within 16” and line of sight.'
  },
  [WALL]: {
    school: ELEMENTALIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'This spell creates a 6”-long, 3”-high wall, part of which must be within 10” and line of sight of the spellcaster. This wall can be climbed as normal. At the end of each turn, after the turn in which the spell was cast, roll a die, on a 1–4 the wall vanishes.'
  },
  [ANIMATE_CONSTRUCT]: {
    school: ENCHANTER,
    castingNumber: 10,
    category: [BEFORE_GAME],
    description: 'It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a permanent member of the warband, taking the place of a soldier. A spellcaster must declare the size of construct they are attempting to animate (small, medium, or large – page 183 before rolling to cast the spell. The larger the construct, the harder it is to animate, so the following modifiers are applied to the Casting Roll: Small -0, Medium -3, Large -6. There is no limit to the number of constructs in a warband other than the normal limits for soldiers. Large constructs count as specialist soldiers, the others as standard soldiers.'
  },
  [ENCHANT_WEAPON]: {
    school: ENCHANTER,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'This spell targets a weapon of the spellcaster’s choosing. If cast on a melee weapon, this weapon counts as a magic weapon with +1 Fight. Bows and crossbows count as magic weapons with +1 Shoot, but the attacks made with them do not count as magic attacks. This spell may be cast on a single arrow or crossbow bolt, in which case that ammunition gives +1 Shoot and its attack counts as magic, but for the next shooting attack only. This spell may only be cast once on each weapon. When using both a magic missile weapon and magic ammunition, the shooter may choose to apply the bonus of one or the other, but not both.'
  },
  [EMBED_ENCHANTMENT]: {
    school: ENCHANTER,
    castingNumber: 14,
    category: [AFTER_GAME],
    description: 'This spell causes any one Enchant Armour or Enchant Weapon spell that is still active at the end of a game to become permanent, and the weapon or armour in question to become a magic weapon or armour. The newly created magic weapon or armour takes up an item slot as normal.'
  },
  [STRENGTH]: {
    school: ENCHANTER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target receives +2 Fight. Multiple Strength spells on the same target have no effect.'
  },
  [CONTROL_CONSTRUCT]: {
    school: ENCHANTER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The target construct must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the construct becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one construct at a time.'
  },
  [GRENADE]: {
    school: ENCHANTER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster takes an object, commonly a simple rock, imbues it with magic energy and throws it at their target, whereupon it explodes into hundreds of fragments. The spellcaster picks a target point within 14”. Every figure, including allies, within 1.5” of that point immediately suffers a +3 magic shooting attack. Use the target point as the origin of the attack for working out line of sight and cover.'
  },
  [ENCHANT_ARMOUR]: {
    school: ENCHANTER,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'This spell may only be cast on a figure wearing armour. The armour worn by the target now counts as magic armour and grants +1 Armour for the rest of the game. Multiple castings of this spell on the same target have no effect.'
  },
  [TELEKINESIS]: {
    school: ENCHANTER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster may move any treasure token within 16” by up to 6” in any direction, so long as it remains in line of sight the entire time. If the treasure moves out of line of sight, it immediately falls straight to the ground. This spell has no effect on a treasure token that has any special requirements for how and when it can be picked up, nor on one being carried by a figure. This spell may not target the central treasure, until after that treasure has been picked up for the first time.'
  },
  [BEAUTY]: {
    school: ILLUSIONIST,
    castingNumber: 10,
    category: [SELF_ONLY],
    description: 'This spell causes anyone who looks on the spellcaster to see a paragon of beauty. Any member of an opposing warband must make a Will Roll with a Target Number equal to the Casting Roll if they wish to do any of the following: move into combat with the spellcaster, make a shooting attack that could potentially hit the spellcaster (including shooting attacks generated by spells), or cast any spell that targets the spellcaster. Spellcasters may empower this Will Roll in the same way they would to resist a spell. A figure may only attempt such a Will Roll once per turn. This spell has no effect on creatures (anything found in Chapter Six: Bestiary, page 176) or war hounds.'
  },
  [ILLUSIONARY_SOLDIER]: {
    school: ILLUSIONIST,
    castingNumber: 12,
    category: [BEFORE_GAME, TOUCH],
    description: 'An illusionary soldier becomes a temporary member of the warband for the next battle (if cast Out of Game) or until the end of the game (if cast during a battle). This soldier can be of any type found on the Soldier Tables (pages 30 and 31) except an apothecary. This soldier cannot pick up treasure, nor can it deal damage, but will otherwise count as a regular soldier for all other the purposes – it may engage in combat, albeit dealing no damage if it wins (it would still have the option to push back its opponent, however), lend support to other figures in combat, etc. If the illusionary soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time. The player must reveal which member of their warband is the illusionary soldier.'
  },
  [FOOLS_GOLD]: {
    school: ILLUSIONIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'This spell may only be cast on a figure carrying a treasure token. That figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the spellcaster may take the treasure token from the figure and move it up to 4” in any direction, provided the final spot is within line of sight of the spellcaster.'
  },
  [TELEPORT]: {
    school: ILLUSIONIST,
    castingNumber: 10,
    category: [SELF_ONLY],
    description: 'The spellcaster immediately moves to any location within line of sight, but may take no other actions this turn after casting this spell. This spell may not be used to enter combat or to move off the table.'
  },
  [BLINK]: {
    school: ILLUSIONIST,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'This spell may target any figure within 12”. Move that figure 4” in a random direction. A figure may make a Will Roll with a Target Number equal to the Casting Roll in order to resist this spell. If successful, the figure does not move. Uncontrolled creatures will always attempt this Will Roll.'
  },
  [INVISIBILITY]: {
    school: ILLUSIONIST,
    castingNmbber: 12,
    category: [Touch],
    description: 'The target figure becomes invisible. No figure may move into combat with the invisible figure, nor target it with any attack or spell (although it may still be affected by area effects, such as the blast radius of a Grenade spell). If the invisible figure moves into combat, casts a spell, or picks up a treasure token, the Invisibility spell is cancelled. This spell may be cast on a figure already carrying treasure, rendering both invisible. In this case, if the figure drops the treasure, the spell is cancelled.'
  },
  [GLOW]: {
    school: ILLUSIONIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure from any source are at +3. Multiple castings of Glow on the same target have no effect.'
  },
  [TRANSPOSE]: {
    school: ILLUSIONIST,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'This spell switches the position of two figures on the table. The two figures being transposed must both be within line of sight of the spellcaster and within 12” of one another. The spellcaster may cast Transpose to switch themselves with another figure. Members of opposing warbands are eligible targets for being transposed but may make a Will Roll with a Target Number equal to the Casting Roll to attempt to resist the spell. If successful, the spell is cancelled and no figures are moved. Friendly figures and uncontrolled creatures will not make such Will Rolls.'
  },
  [ANIMATE_SKULL]: {
    school: NECROMANCER,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster fills a skull with magic malice and throws it at an opponent. Place one animated skull (page 190) within 6” of the spellcaster. It can be placed directly into combat. This skull is an uncontrolled creature. The spellcaster may not cast this spell again until this creature is removed from the table, but may spend an action to cancel the spell, in which case the animated skull is immediately removed from the table.'
  },
  [RAISE_ZOMBIE]: {
    school: NECROMANCER,
    castingNumber: 10,
    category: [BEFORE_GAME, TOUCH],
    description: 'The spellcaster adds one zombie(page 193) to their warband as a temporary member.If the spell is cast before the game, the zombie can be deployed normally.If it is cast during a game, the zombie appears in base contact with the spellcaster.A warband may only have one raised zombie at any one time.If the zombie is killed or exits the table, Raise Zombie can be cast again to create another.B O N E S O F T H E E A RT H Necromancer / 10 / LINE_OF_SIGHT A skeletal hand reaches out of the ground and grabs the target’s ankle.The figure may not take any move actions until it escapes.Any form of magic movement, except the Leap spell, allows a figure to escape the hand; otherwise, the only way to escape is to fight the hand, which has Fight + 0, Health 1. If the hand takes one point of damage, it vanishes, and the target is free.Other figures in base contact may attack the hand or give a support bonus.If the hand wins the fight, it does damage as normal.This spell may only be cast against a target that is standing on the ground.Large creatures are unaffected by this spell.The maximum range for this spell is 18”.'
  },
  [STEAL_HEALTH]: {
    school: NECROMANCER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If failed, the target immediately loses 3 Health and the spellcaster regains 3 Health. The spellcaster gains 3 Health, even if the target had less Health than that remaining. This may not take the spellcaster above their starting Health. This spell has no effect on undead or constructs. A spellcaster may target a member of their own warband – if they do, however, the target immediately (and permanently) leaves the warband and is treated as an uncontrolled creature for the rest of the game.'
  },
  [BONE_DART]: {
    school: NECROMANCER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'This spell fires a small, sharp shard of bone. The spellcaster makes a +5 shooting attack against any figure within line of sight and 12”. This does not count as a magic attack.'
  },
  [SPELLEATER]: {
    school: NECROMANCER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'Casting this spell causes the spellcaster to immediately take 1 point of damage. When this spell is cast, it cancels the effects of a single casting of any one spell currently in play. This spell cannot unsummon a creature, but it can cancel the control of a creature.'
  },
  [CONTROL_UNDEAD]: {
    school: NECROMANCER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The target undead creature must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the undead creature becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one undead creature at a time.'
  },
  [STRIKE_DEAD]: {
    school: NECROMANCER,
    castingNumber: 18,
    category: [LINE_OF_SIGHT],
    description: 'This spell targets a figure within 8”. The target must make a Will Roll with a Target Number equal to the Casting Roll or be immediately reduced to 0 Health. All figures may empower their Will Roll to resist this spell, even non-spellcasters. The spellcaster immediately loses 1 Health upon attempting this spell (even if it is cast successfully), in addition to any loss incurred by failure or empowerment. This spell has no effect on undead or constructs.'
  },
  [ABSORB_KNOWLEDGE]: {
    school: SIGILIST,
    castingNumber: 12,
    category: [AFTER_GAME],
    description: 'Wizard only. This spell allows a wizard to absorb the knowledge from a written work without having to read it. A wizard immediately gains 40 experience points for casting this spell to represent the speed with which they can gain knowledge. This experience does not count against the maximum that can be earned in one game. This spell may only be cast after a game in which the wizard was not reduced to 0 Health.'
  },
  [FURIOUS_QUILL]: {
    school: SIGILIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target is attacked by a sharp animated quill. Although the quill does no damage, it is highly irritating and extremely distracting. While under attack, the target suffers -1 Move, -2 Fight, -4 Shoot, and -2 to all Casting Rolls. Whenever the target is activated, it may make a Will Roll with a Target Number equal to the Casting Roll – if successful, the quill is caught and destroyed. Multiple castings of Furious Quill against the same target have no effect.'
  },
  [DRAINING_WORD]: {
    school: SIGILIST,
    castingNumber: 14,
    category: [AREA_EFFECT],
    description: 'This spell draws a bright rune of power in the sky. The spellcaster may choose one spell for Draining Word to affect. All rolls to attempt to cast that particular spell are at -3 for the rest of the game. A spellcaster may only have one Draining Word spell in effect at a time. Only one Draining Word can be active for each specific target spell at one time.'
  },
  [PUSH]: {
    school: SIGILIST,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'The target suffers an immediate +10 attack. Instead of taking damage from this attack, the target is moved 1” directly away from the spellcaster for every point of damage they would have taken. If this pushes the target into the edge of the table or a piece of terrain over 1⁄2” high, they stop immediately. Other figures do not stop (or get hit by) a pushed figure – they are assumed to step out of the way. If this spell is cast from beneath a figure it will push them up. If the target is pushed up or off a height, it suffers falling damage as normal. This spell can push a figure out of combat, and as it is not a shooting attack, the target is not randomized.'
  },
  [BRIDGE]: {
    school: SIGILIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster uses the parchment of a long scroll to create a temporary bridge, ramp, or staircase. Place a bridge 6” long and 2” wide anywhere that is completely in the line of sight of the spellcaster. The bridge has no appreciable thickness and is essentially two-dimensional. The ends of this bridge do not have to be on the same horizontal plane, nor do the ends of the bridge need to be anchored on terrain, they may float in the air. Figures may move along this bridge at their normal movement rate, even when essentially climbing. Each spellcaster may only have one bridge in play at any time. Whenever the spellcaster activates, they may cancel this spell as a free action. Otherwise roll a die at the end of every turn: on a 1–2 the bridge vanishes. Figures on the bridge when it vanishes will fall to the ground.'
  },
  [POWER_WORD]: {
    school: SIGILIST,
    castingNumber: 14,
    category: [AREA_EFFECT],
    description: 'This spell draws a bright rune of power in the sky. The spellcaster may pick one spell for the Power Word to affect. All rolls to cast that particular spell are at +3 for every spellcaster for the rest of the game. A spellcaster may only have one Power Word spell in effect at a time. Only one Power Word can be active for each specific target spell at one time.'
  },
  [EXPLOSIVE_RUNE]: {
    school: SIGILIST,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster draws a bright, glowing rune of power on the ground or a wall anywhere within 4” and line of sight. A marker should be placed on the table to represent the rune. If any character or creature that was not part of the spellcaster’s warband at the start of the game moves within 1” of the rune, it explodes, and every figure, friend or foe, within 2” suffers an immediate +5 magic attack. Note that if the rune is placed within 1” of a figure, it does not explode immediately – that figure must move to set it off. A spellcaster may have up to three such runes in play at any time. At the end of any turn, they may choose to cancel any or all their runes. If the spellcaster that placed a rune is no longer on the table, roll a die for each rune at the end of each turn: on an 11+ the rune vanishes.'
  },
  [WRITE_SCROLL]: {
    school: SIGILIST,
    castingNumber: 12,
    category: [AFTER_GAME],
    description: 'This spell creates one scroll. The scroll must be of a spell that the spellcaster either knows or a spell for which they own the grimoire. The scroll may be sold, given to a figure, or stored in the wizard’s vault.'
  },
  [AWARENESS]: {
    school: SOOTHSAYER,
    castingNumber: 12,
    category: [BEFORE_GAME],
    description: 'If this spellcaster is on the table, its warband may add +2 to its Initiative Rolls for the purposes of determining the primary player only. This bonus stacks so, if both the wizard and the apprentice have cast this spell and are both on the table, the player may add +4 to their Initiative Rolls. The maximum possible bonus is +4. This spell counts as active on the spellcaster during the game and may be cancelled by anything that cancels spells.'
  },
  [REVEAL_SECRET]: {
    school: SOOTHSAYER,
    castingNumber: 12,
    category: [BEFORE_GAME],
    description: 'This spell imparts knowledge on some lost treasure. Every successful casting of this spell before a game allows the player to make two rolls for a single treasure token (other than the central treasure, which is unaffected by this spell) after the game and choose which one to take.'
  },
  [MIND_CONTROL]: {
    school: SOOTHSAYER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the target temporarily joins the spellcaster’s warband, activating as normal. After the figure activates each turn, it must make another Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled and the figure returns to its normal allegiance. A spellcaster may only have one active Mind Control spell at a time. A figure under Mind Control cannot purposely take any action that causes it immediate damage but can be moved into combat and may attack an enemy figure. A figure under Mind Control is not allowed to move off the table. A spellcaster may cancel an active Mind Control at the end of any turn. This spell has no effect on spellcasters.'
  },
  [TRUESIGHT]: {
    school: SOOTHSAYER,
    castingNumber: 10,
    category: [SELF_ONLY],
    description: 'The spellcaster, and all friendly figures within 6” of the spellcaster, can see invisible figures and are immune to the effects of the Beauty spell. Furthermore, if an invisible figure is within 6” of the spellcaster, the Invisibility spell is cancelled. If an Illusionary Soldier is within 6” of the spellcaster, it is immediately removed from the table.'
  },
  [COMBAT_AWARENESS]: {
    school: SOOTHSAYER,
    castingNmbber: 12,
    category: [Touch],
    description: 'This spell gives the target a magic insight into the moves their opponent will attempt in a fight. It grants the target +1 Fight and +1 Armour for the remainder of the game. Multiple castings of this spell on the same target have no effect.'
  },
  [SUGGESTION]: {
    school: SOOTHSAYER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The target of this spell immediately drops any treasure tokens it is carrying. The spellcaster may move the figure up to 3” in any direction provided this does not move the figure into combat or cause it any immediate damage (e.g. falling more than 3”). The target of this spell may make a Will Roll with a Target Number equal to the Casting Roll. If successful, the spell has no effect.'
  },
  [MIND_LOCK]: {
    school: SOOTHSAYER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The target of this spell becomes immune to Mind Control and Suggestion spells for the rest of the game, and any current Mind Control spells on the figure are cancelled. The figure gains +2 Will for the rest of the game.'
  },
  [WIZARD_EYE]: {
    school: SOOTHSAYER,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'This spell may be cast on any terrain feature within 12” that has a flat side, such as most ruins. Place a token on or next to the terrain feature to represent the Wizard Eye. For the rest of the game, the caster may choose to draw line of sight from the Wizard Eye instead of from the figure when casting spells. The Wizard Eye has 180-degree field of vision. A spellcaster may only maintain one Wizard Eye at a time. If the terrain piece on which the Wizard Eye is placed is damaged or destroyed (such as by a Crumble spell) the spell is cancelled. The spellcaster may cancel this spell at the end of any turn.'
  },
  [CONTROL_DEMON]: {
    school: SUMMONER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target demon must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one demon at a time.'
  },
  [PLANAR_TEAR]: {
    school: SUMMONER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster creates a small tear in the fabric of the universe. This rift is painful to humans and creatures, but lethal to demons. The spellcaster selects a target point. All figures within 2” of that point must make a Will Roll with a Target Number equal to the Casting Roll or suffer 2 points of damage. Demons that fail the Will Roll take damage equal to the Casting Roll.'
  },
  [LEAP]: {
    school: SUMMONER,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'This spell may only be cast on a member of the spellcaster’s warband. Immediately move the target figure up to 10” in any direction, including vertically. This move must either be in a straight line or an arc. It cannot curve around corners. If this move leaves the figure above the ground, it immediately falls, taking damage as normal. If the target is carrying treasure, this move is reduced to 5”. This move may not take a figure off the table or into combat. The target of the Leap spell may take no other actions this turn, though it may have taken actions previously.'
  },
  [POSSESS]: {
    school: SUMMONER,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'This spell may only be cast on a permanent or temporary member of the spellcaster’s own warband, except the wizard, apprentice, or demons. The target is possessed by a demon and gains +2 Fight, +1 Armour, and -2 Will and counts as a demon (i.e. it will be affected by Banish, Control Demon, Circle of Protection, etc.). This figure may not be part of a group activation. If removed from the game for any reason (such as being hit by a Banish spell), check for the character’s survival as normal. A spellcaster may only have one Possess spell active at a time.'
  },
  [IMP]: {
    school: SUMMONER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The spellcaster places an imp (page 184) on the table anywhere within the spellcaster’s line of sight, but no closer than 3” to any other figure. The imp follows the normal rules for uncontrolled creatures and will activate in the next Creature phase. If the spellcaster casts this spell a second time, the first imp immediately vanishes.'
  },
  [PLANEWALK]: {
    school: SUMMONER,
    castingNumber: 10,
    category: [SELF_ONLY],
    description: 'Although the spellcaster remains in the same physical location, they move briefly between planes of existence. For the rest of this turn, they can ignore all terrain when moving, thus walking through walls or across chasms. They may not be the target of any shooting attacks or spells. The spellcaster will never be considered in combat during the turn, nor can they be attacked by any figure. They may not, however, pick up treasure or in any way affect other figures or terrain on the table. If they are carrying treasure, they drop it. It is incredibly draining to move between planes of existence, so if a spellcaster attempts to cast this spell in a second consecutive turn, they suffer a -5 modifier to their Casting Roll, -10 if they attempt it three turns in a row, and -15 on the fourth turn and beyond.'
  },
  [PLAGUE_OF_INSECTS]: {
    school: SUMMONER,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target figure is attacked by a cloud of stinging or biting insects that irritate and distract. The cloud of insects has a 1” radius centred on, and moving with, the target figure. It affects all figures, including the target figure, fully or partially within this radius. While being pestered by the insects, a figure has -4 Fight and -4 Shoot (to a minimum of +0) and -2 to Casting Rolls. After this figure activates each turn, it may make a Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled. Other figures within the radius may simply move away to escape. A figure may only ever be affected by one Plague of Insects spell at a time, whether as a target or by virtue of being within the 1” radius. Large creatures, undead, and constructs are immune to this spell.'
  },
  [SUMMON_DEMON]: {
    school: SUMMONER,
    castingNmbber: 12,
    category: [Touch],
    description: 'Immediately place a demon on the table within 1” of the spellcaster. It may not be placed straight into combat. This demon is considered to be under the effects of a Control Demon spell by the same spellcaster, and thus this spell may not be cast if the spellcaster is already controlling a demon. The type of demon summoned depends on the amount by which the spellcaster succeeded on their Casting Roll: 0–5 imp, 6–12 minor demon, 13+ major demon. If a spellcaster rolls a 1 while attempting to cast this spell, they summon an uncontrolled demon and must place this demon in combat with the spellcaster. Roll a die to determine the type of demon 1–10 imp, 11–17 minor demon, 18+ major demon. A spellcaster cannot empower a roll of 1 when casting this spell but there is otherwise no limit on empowering this spell. It may be empowered above 18.'
  },
  [BANISH]: {
    school: THAUMATURGE,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'All demons within line of sight of the spellcaster must pass an immediate Will Roll with a Target Number equal to the Casting Roll. If a demon fails the roll and its current Will is +4 or less, it is immediately reduced to 0 Health and removed from the table. If its current Will is +5 or higher, it suffers damage equal to three times the amount by which it failed the Will Roll.'
  },
  [DISPEL]: {
    school: THAUMATURGE,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'Immediately cancels the ongoing effect of any one casting of any one spell. It cannot unsummon a creature, but it can cancel the control of a creature that is a temporary member of a warband.'
  },
  [CIRCLE_OF_PROTECTION]: {
    school: THAUMATURGE,
    castingNmbber: 12,
    category: [Touch],
    description: 'Creates a circle with a 3” diameter which no demon or undead creature can enter or pass through. If something forces them into contact with the circle, they stop at its edge. A spellcaster may only have one active circle of protection at a time, but they do not have to remain within it. The spellcaster may cancel this spell at the end of any turn. Otherwise, roll a die at the end of every turn: on a 1–3 the spell is cancelled.'
  },
  [MIRACULOUS_CURE]: {
    school: THAUMATURGE,
    castingNumber: 16,
    category: [AFTER_GAME],
    description: 'Wizard only. This spell may be used in several different ways. A successful casting of this spell will remove all permanent injuries from one figure. For example, a wizard suffering from Lost Fingers regrows all their missing digits, regardless of how many times they have suffered that particular injury. Or, it may be cast on a Badly Wounded figure – if successful, the soldier is healed and may participate in the next game with no penalty. Finally, it may be used to attempt to bring a figure back from the dead. The figure must have died in the game just played, and using the spell in this fashion incurs a -4 penalty to the Casting Roll. If successful, the figure is restored to life, and may participate in the next game with no penalty. If Miraculous Cure is cast using a scroll, it cannot be used to resurrect the dead.'
  },
  [BLINDING_LIGHT]: {
    school: THAUMATURGE,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it may not attack, shoot, or cast LINE_OF_SIGHT spells. Its Fight stat is reduced to +0 and its Move to 1. At the end of each turn, the figure may attempt another Will Roll with the same Target Number. If successful, the spell is cancelled.'
  },
  [HEAL]: {
    school: THAUMATURGE,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'This spell restores up to 5 points of lost Health to a target figure within 6”. This spell cannot take a model above its starting Health. This spell has no effect on undead or constructs.'
  },
  [DESTROY_UNDEAD]: {
    school: THAUMATURGE,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target undead creature must make a Will Roll with a Target Number equal to the Casting Roll. If the undead creature fails the roll and its current Will is +2 or less, it is immediately reduced to 0 Health and is removed from the table. If its current Will is +3 or higher, it suffers damage equal to three times the amount by which it failed the Will Roll.'
  },
  [SHIELD]: {
    school: THAUMATURGE,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'The target receives +2 Armour for the rest of the game. The maximum armour rule (see, p.36) still applies. Multiple castings of Shield on the same target have no effect.'
  },
  [ANIMAL_COMPANION]: {
    school: WITCH,
    castingNumber: 10,
    category: [BEFORE_GAME],
    description: 'The spellcaster summons an animal companion of their choice from the following options to become a permanent member of their warband: bear (page 179), ice toad (page 180), snow leopard (page 182), or wolf (page 182). All Animal Companions count as standard soldiers. Animal companions are more strong-willed than wild examples of their species and receive a permanent +3 Will. A spellcaster may only have one animal companion at any time.'
  },
  [FAMILIAR]: {
    school: WITCH,
    castingNumber: 10,
    category: [BEFORE_GAME],
    description: 'The spellcaster gains a familiar, which can take the form of any small creature. It is not depicted on the table, unless the player wants to include it on the spellcaster figure. A spellcaster with a familiar gains +2 Health (write as a split stat). If the spellcaster is ever reduced to 1 Health or less, the familiar is destroyed. At the start of the next game, the spellcaster reverts to their normal Health, unless another Familiar spell is successfully cast'
  },
  [CONTROL_ANIMAL]: {
    school: WITCH,
    castingNumber: 12,
    category: [LINE_OF_SIGHT],
    description: 'The target animal must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the animal becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one animal at a time.'
  },
  [MUD]: {
    school: WITCH,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'All ground within 3” of a target point becomes rough ground.'
  },
  [BREW_POTION]: {
    school: WITCH,
    castingNumber: 12,
    category: [BEFORE_GAME],
    description: 'The spellcaster creates one Lesser Potion of their choice (page 86) that may be sold, stored in the wizard’s vault, or given to a member of the warband. A wizard (and only a wizard) may use this spell to create a Greater Potion (page 87). First, they must declare what potion they are attempting to brew and pay the listed ingredients cost. The wizard should then roll to cast Brew Potion with a -4 to the Casting Roll. If successful, the potion is created and can be immediately assigned to a figure in the warband, sold, or stored in the wizard’s vault. If unsuccessful, the potion is not created and the money spent on ingredients is lost.'
  },
  [FOG]: {
    school: WITCH,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'Place a line of fog, 6” long, 3” high, and 1” thick anywhere on the table as long as some part of it is within line of sight of the spellcaster and all of it is within 24”. Figures can move through the fog with no penalty, but line of sight may not be drawn through it. At the start of each new turn, roll a die. On a result of 1–4 the fog dissipates and is removed from the table.'
  },
  [CURSE]: {
    school: WITCH,
    castingNumber: 8,
    category: [LINE_OF_SIGHT],
    description: 'The target suffers -2 to all die rolls. At the end of each turn, the target may make a Will Roll with the Target Number equal to the Casting Roll (at -2, of course). If successful, this spell is cancelled. Curse cannot be cast on a figure already suffering the effects of a Curse spell.'
  },
  [POISION_DART]: {
    school: WITCH,
    castingNumber: 10,
    category: [LINE_OF_SIGHT],
    description: 'Make an immediate plus +3 poisoned shooting attack against the target figure. This is a non-magic attack.'
  },
};