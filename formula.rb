# Simple Ruby script used to precisely calculate/generate the constant value code.
# Copyright 2015 Christopher Joakim <christopher.joakim@gmail.com>
#
# See http://en.wikipedia.org/wiki/Imperial_units
# 'meters_per_imperial_mile' is the basis for the following calculations

meters_per_imperial_mile = 1609.344
km_per_mile  = meters_per_imperial_mile / 1000.0
miles_per_km = 1.0 / km_per_mile
yds_per_km   = miles_per_km * (5280.0 / 3.0)
feet_per_km  = miles_per_km * 5280.0
feet_per_m   = feet_per_km / 1000.0

puts ""
puts "  @KILOMETERS_PER_MILE = #{km_per_mile}"
puts "  @MILES_PER_KILOMETER = #{miles_per_km}"
puts "  @YARDS_PER_KILOMETER = #{yds_per_km}"
puts "  @FEET_PER_KILOMETER  = #{feet_per_km}"
puts "  @FEET_PER_METER      = #{feet_per_m}"
puts "  @YARDS_PER_MILE      = 1760.0"
puts "  @SECONDS_PER_HOUR    = 3600.0"
puts ""
